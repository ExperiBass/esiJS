module.exports = addArrays

function addArrays(a1, a2) {

    if (!a1 || typeof a1 !== 'object' || !a2 || typeof a2 !== 'object') {
        console.error('addArrays takes 2 arrays.')
        throw Error('addArrays takes 2 arrays')
    }

    let array = a1.slice(0)

    function add(v) {
        array.push(v)
    }

    a2.forEach(add)

    return array
}
