const fs = require('fs');
const path = require('path');
const files = process.argv.slice(2);
if(files.length === 0){
  console.error('Usage: node remove-unused-imports-safe.cjs <file1> <file2> ...');
  process.exit(1);
}
const modified = [];
files.forEach(fp=>{
  const full = path.resolve(fp);
  let s = fs.readFileSync(full,'utf8');
  const lines = s.split('\n');
  let changed = false;
  for(let i=0;i<lines.length;i++){
    const line = lines[i];
    const m = line.match(/^\s*import\s+\{([^}]+)\}\s+from\s+(['\"][^'\"]+['\"]);?\s*$/);
    if(m){
      const specList = m[1];
      const moduleStr = m[2];
      const specs = specList.split(',').map(x=>x.trim()).filter(Boolean);
      const used = specs.filter(spec=>{
        const asMatch = spec.match(/^(\w+)\s+as\s+(\w+)$/);
        const candidates = asMatch ? [asMatch[1], asMatch[2]] : [spec];
        const after = lines.slice(i+1).join('\n');
        return candidates.some(c=> new RegExp('\\b'+c+'\\b','g').test(after));
      });
      if(used.length !== specs.length){
        if(used.length === 0){
          lines[i] = ''; // remove the whole import line
        } else {
          lines[i] = `import { ${used.join(', ')} } from ${moduleStr};`;
        }
        changed = true;
      }
    }
  }
  if(changed){
    fs.writeFileSync(full, lines.join('\n'), 'utf8');
    modified.push(fp);
  }
});
console.log(JSON.stringify(modified, null, 2));
