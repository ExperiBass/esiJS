let esiJS = require('./endpoints') 

esiJS.character.info(r.data.character[0])
.then(r => {
    console.log(r)
})
.catch(e => {
    console.error(e)
})  
