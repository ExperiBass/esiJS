module.exports = categoryInfo

const axios = require('axios')
const { link, dataSource } = require('../../../esi.json')

async function categoryInfo(categoryID) {
    let returningData;
    if (!categoryID || typeof categoryID !== 'number') {
        console.error(`The function 'categoryInfo' needs a category ID!`)
        throw Error('categoryInfo needs a category ID')
    }

    await axios.get(`${link}universe/categories/${categoryID}/?datasource=${dataSource}`)
        .then(response => {
            returningData = Promise.resolve(response.data)
        })
        .catch(function(e) {
            let error = e.response.data.error
            console.error(`From ESI:`,error)
            throw Error(error)
        })
        
    return returningData;
}