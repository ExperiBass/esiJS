module.exports = addArrays

function addArrays(a1, a2) {

    if (!a1 || typeof a1 !== 'object' || !a2 || typeof a2 !== 'object') {
        console.error('addArrays takes 2 arrays.')
        return Error('addArrays takes 2 arrays')
    }

    let array = a1.slice(0)
    
   /* for (let i = 1; i < arguments.length; i++) {
        arguments[i].forEach(add)
    }*/
    function add(v) {
        array.push(v)
    }
   // array.push(a2)
    a2.forEach(add)

    return array
}

/*function a() {
    console.log(addArrays([1,2,3],[4,5,6]))
}
console.log(a())*/