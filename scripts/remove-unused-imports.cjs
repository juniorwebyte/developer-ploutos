const fs = require('fs');
const path = require('path');
const files = process.argv.slice(2);
if(files.length === 0){
  console.error('Usage: node remove-unused-imports.cjs <file1> <file2> ...');
  process.exit(1);
}
const modified = [];
files.forEach(fp=>{
  const full = path.resolve(fp);
  let s = fs.readFileSync(full,'utf8');
  const importRegex = /^import\s+\{([\s\S]*?)\}\s+from\s+(['\"][^'\"]+['\"]);?/mg;
  let match;
  let newS = s;
  let changed = false;
  while((match = importRegex.exec(s))){
    const specList = match[1];
    const moduleStr = match[2];
    const start = match.index;
    const end = importRegex.lastIndex;
    const specs = specList.split(',').map(x=>x.trim()).filter(Boolean);
    const used = specs.filter(spec=>{
      // handle alias: A as B => check B and A
      const asMatch = spec.match(/^(\w+)\s+as\s+(\w+)$/);
      const candidates = asMatch ? [asMatch[1], asMatch[2]] : [spec];
      return candidates.some(c=>{
        const re = new RegExp('\\b'+c+'\\b','g');
        const after = s.slice(end);
        return re.test(after);
      });
    });
    if(used.length !== specs.length){
      // build replacement import
      if(used.length === 0){
        // remove whole import line
        const before = newS.slice(0, start);
        const after = newS.slice(end);
        newS = before + after;
      } else {
        const before = newS.slice(0, start);
        const after = newS.slice(end);
        const replaced = `import { ${used.join(', ')} } from ${moduleStr};`;
        newS = before + replaced + after;
      }
      changed = true;
    }
  }
  if(changed){
    fs.writeFileSync(full, newS, 'utf8');
    modified.push(fp);
  }
});
console.log(JSON.stringify(modified, null, 2));
