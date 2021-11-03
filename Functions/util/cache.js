/**
 * @private
 */
class Cache {
    cache = {}
    constructor() {
    }
    /**
     * @param {String} identifier The identifier assigned to the object.
     * @param {Object} item The item to cache.
     * @param {Number} timeout The time to cache for, in seconds.
     */
    add(identifier, item, timeout) {
        this.cache[identifier] = item
        setTimeout(() => {
            if (this.cache[identifier]) {
                delete this.cache[identifier]
            }
        }, timeout * 1000)
    }
    /**
     * Force-delete a cached request.
     * @param {String} identifier
     */
    delete(identifier) {
        delete this.cache[identifier]
    }
    has(identifier) {
        return this.cache[identifier] ? true : false
    }
    get(identifier) {
        return this.cache[identifier]
    }
}

const cache = new Cache()
module.exports = cache