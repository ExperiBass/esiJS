# CONTRIBUTING

There's not much of a coding style here, this uses Microsoft CamelCase, for example:

```js
let thisIsACamelCaseVariable
```

Braces are used like this: 
```js
function myFunc() {

}
```

NOT like this:
```js 
function myFunc() 
{

}
```

Variables are declared using `let`.

Naming a function is also in camelCase, as are the files that contain them (which shuld be the name of the function).

Functions in esiJS are simple: definition of Axios and `esi.json`, the function, the get or post, and the error checking.

Examples:

GET (no arg):
```js
module.exports = alliances
// ^ is required
const axios = require('axios')
const { link, dataSource } = require('../../esi.json')
// ^ gets Axios for use and defines `link` and `dataSource`
async function alliances() { // < Function must be async
let returningData; // < unwrapped promise data

    await axios.get(`${link}alliances/?datasource=${dataSource}`) // < the get request
        .then(response => {
            returningData = Promise.resolve(response.data)
        })
        .catch(function(e) {
            let error = e.response.data.error
            console.error(`From ESI:`,error)
            return Error(error)
        })
        // ^ Error handling
        return returningData; // < return the data
}
```

GET (single/multi args):
```js
module.exports = planRoute

const axios = require('axios')
const { link, dataSource } = require('../../esi.json')

async function planRoute(orgin, desto, flag = 'secure', avoid) { // < Optional arguments are defined last
    let returningData;
    let query;
    // ^ If the URL is modified by the arguments for the call, set a variable `query` that can be changed to suit the args
    if (!orgin || typeof orgin !== 'number') {
        console.error(`the function 'planRoute' requires a orgin system ID!`)
        return Error('planRoute requires orgin system ID')
    }
    if (!desto || typeof desto !== 'number') {
        console.error(`the function 'planRoute' requires a destination system ID!`)
        return Error('planRoute requires destination system ID')
    }
    if (!'shortest secure insecure'.split(' ').includes(flag)) {
        console.error(`the third argument for the function 'planRoute' has to be either 'secure', 'shortest', or 'insecure'!`)
        return Error(`third arg must be 'secure', 'shortest', or 'insecure' (defaults to 'safest')`)
    }
    // ^ if statements above check to make sure the arguments are a valid type and exist (if they are required)
    if (avoid && typeof avoid === 'object') {
        query = `${link}route/${orgin}/${desto}/?avoid=${avoid}&datasource=${dataSource}&flag=${flag}`
    } else {
        query = `${link}route/${orgin}/${desto}/?datasource=${dataSource}&flag=${flag}`
    }
    if (typeof avoid !== 'object') {
        console.error(`the fourth argument must be a array!`)
        return Error(`fourth arg must be array`)
    }
    // ^ The if above modifies the query URL if `avoid` is used or not

    await axios.get(query)
        .then(response => {
            returningData = Promise.resolve(response.data)
        })
        .catch(function(e) {
            let error = e.response.data.error
            console.error(`From ESI:`,error)
            return Error(error)
        })
        // same as before
    return returningData;
}
```

POST:
```js
module.exports = affiliation

const axios = require('axios')
const { link, dataSource } = require('../../esi.json')

async function affiliation(charID) {
    let data;
    if (typeof charID !== 'object') {
        console.error(`The function 'affiliation' requires a array!`)
        return Error('affiliation requires array')
    }

        response = await axios.post(`${link}characters/affiliation/?datasource=${dataSource}`, charID)
        // ^ POST is different from GET
        .catch(function(e) {
            let error = e.response.data.error
            console.error(`From ESI:`,error)
            return Error(error)
        })
    return response.data
}
```

Have fun yall, and fly safe! o7