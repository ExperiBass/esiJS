const documentation = require('documentation')
const fs = require('fs')
const path = require('path')
const Chalk = require('chalk')

async function build() {
    let files = await fs.readdirSync(path.join(__dirname, './Functions'))
    for (let file of files) {
        if (file !== `utility.js` && file !== `esiJS-Utils`) {
            console.log(Chalk.yellow(`Building docs for ${file}...`))
            let doc = await documentation.build([`${path.join(__dirname, `./Functions/${file}`)}`], {
                extension: 'js',
                // gotta remove the util cause those somehow end up in every fucking md
                inferPrivate: '^get|set|sleep|log'
            })
            doc = await documentation.formats.md(doc, {
                markdownToc: true
            })

            await fs.writeFileSync(`./docs/${file.replace('.js', '')}.md`, doc)
            console.log(Chalk.green(`Docs for ${file} built.`))
        }
    }
    // now rebuild the util, except this time dont ignore the functions
    let file = `utility.js`
    console.log(Chalk.yellow(`Building docs for ${file}...`))
    let doc = await documentation.build([`${path.join(__dirname, `./Functions/${file}`)}`], {
        extension: 'js',
    })
    doc = await documentation.formats.md(doc, {
        markdownToc: true
    })

    await fs.writeFileSync(`./docs/${file.replace('.js', '')}.md`, doc)
    console.log(Chalk.green(`Docs for ${file} built.`))
}
build().catch(e => {
    console.error(e.stack)
})