# esiJS

esiJS is a updated module for the EVE Online ESI. It makes getting data from the ESI much easier, avoids cluttering your code with HTTP requests, and is small and powerful.

# INSTALLING:

```bash
npm i --save esijs
```

# USAGE:

```js
let esiJS = require('esiJS')
// Use all functions like this:
esiJS.group.<subgroup>.function()
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
    let b = await esiJS.group.<subgroup>.function()
} catch(e) { // try/catch is used when you do `await` a function
    // Error? What error?
}
```

# API

## Table of contents
