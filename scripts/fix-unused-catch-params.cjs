const fs = require('fs');
const path = require('path');
const report = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'eslint-report.json'), 'utf8'));
const files = report.sort((a,b)=>b.messages.length-a.messages.length).slice(0,50).map(f=>f.filePath);
const modified = [];
files.forEach(fp=>{
  let s = fs.readFileSync(fp,'utf8');
  let changed = false;
  const regex = /catch\s*\(\s*(error|e)(\s*:\s*[^)]+)?\s*\)\s*\{/g;
  let m;
  let acc = '';
  let lastIndex = 0;
  while((m=regex.exec(s))){
    const name = m[1];
    const startIdx = m.index + m[0].length;
    let i = startIdx;
    let depth = 1;
    while(i < s.length && depth > 0){
      if(s[i] === '{') depth++;
      else if(s[i] === '}') depth--;
      i++;
    }
    const block = s.slice(startIdx, i);
    if(!new RegExp('\\b'+name+'\\b').test(block)){
      const before = s.slice(lastIndex, m.index);
      const catchSig = s.slice(m.index, m.index + m[0].length);
      const replacedCatch = catchSig.replace(new RegExp('catch\\s*\\(\\s*'+name+'(\\s*:\\s*[^)]+)?\\s*\\)'), 'catch (_'+name+'$2)');
      acc += before + replacedCatch;
      lastIndex = m.index + m[0].length;
      changed = true;
    }
  }
  if(changed){
    acc += s.slice(lastIndex);
    fs.writeFileSync(fp, acc, 'utf8');
    modified.push(fp);
  }
});
console.log(JSON.stringify(modified, null, 2));
