const documentation = require('documentation');
const fs = require('fs')
const path = require('path')

async function build() {
    let files = await fs.readdirSync(path.join(__dirname, './Functions'))
    for (file of files) {
        let doc = await documentation.build([`${path.join(__dirname, `./Functions/${file}`)}`])
    }
}
documentation.build(['/Users/gingkathfox/Documents/GitHub/esiJS/Functions/alliance.js'], {extension: 'js'})
  .then(documentation.formats.md)
  .then(output => {
    // output is a string of Markdown data
    fs.writeFileSync('./output.md', output);
  });