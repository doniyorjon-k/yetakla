const fs=require('fs');
const css=fs.readFileSync('style.css','utf8');
const secs=fs.readdirSync('sections').filter(f=>f.endsWith('.js')).sort((a,b)=>parseInt(a.slice(1))-parseInt(b.slice(1))).map(f=>'sections/'+f);
const js=['data.js','formula.js',...secs,'content.js','app.js'].map(f=>`<script>\n${fs.readFileSync(f,'utf8')}\n</script>`).join('\n');
const head=`<title>Yetakla — data analitika</title>
<meta name="claude:viewport-fit-sides" content="cover">
<meta name="description" content="Data analitikani o'zbek tilida, o'yin shaklida o'rganish">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=JetBrains+Mono:wght@400;700&family=Nunito:wght@400;600;700;800;900&display=swap">
<style>
${css}
</style>`;
const body=`<div id="app"></div>\n${js}`;
fs.writeFileSync('datayol.html', head+'\n'+body+'\n');
fs.writeFileSync('datayol-standalone.html', `<!doctype html>\n<html lang="uz">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n${head}\n</head>\n<body>\n${body}\n</body>\n</html>\n`);
console.log(fs.statSync('datayol.html').size);
