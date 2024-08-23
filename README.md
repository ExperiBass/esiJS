# esiJS

esiJS is a updated module for the EVE Online ESI. It makes getting data from the ESI much easier, avoids cluttering your code with HTTP requests, and is small and powerful.

## adopted by @zOnlyKroks, there may be a TS alternative coming soon as well :3

# INSTALLING:

```bash
npm i esijs
```

# USAGE:

```js
const esiJS = require('esijs')
const esiClient = new esiJS({})
// Use all functions like this:
esiClient.group.<subgroup>.function()
    .then(r => {
        let headers = r.headers
        let data = r.data

        // do something with headers and data
    })
    .catch(e => { // .then/.catch is used when you don't await a function
        // whatever you want to do with errors
    })
// Or like this:
try {
    let data = await esiClient.group.<subgroup>.function()
} catch(e) { // try/catch is used when you await a function
    // Error? What error?
}
```

Please view the `docs/` directory for the documentation on each group.

# TODO

find maintainers that play the game lol, my email is on my site  
use etags for caching?  
roll everything under the class so they can use `this`  