const documentation = require('documentation')
const fs = require('fs')
const path = require('path')
const Chalk = require('chalk')

async function build() {
    let files = await fs.readdirSync(path.join(__dirname, './Functions'))
    for (file of files) {
        console.log(Chalk.yellow(`Building docs for ${file}...`))
        let doc = await documentation.build([`${path.join(__dirname, `./Functions/${file}`)}`], {
            extension: 'js'
        })
        doc = await documentation.formats.md(doc)
        await fs.writeFileSync(`./docs/${file.replace('.js', '')}.md`, doc)
        console.log(Chalk.green(`Docs for ${file} built.`))
    }
}
build()