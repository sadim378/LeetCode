var TimeLimitedCache = function() {
    // Map to store key => {value, timeoutId}
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let existed = false;

    if (this.cache.has(key)) {
        // Clear previous timeout
        clearTimeout(this.cache.get(key).timeoutId);
        existed = true;
    }

    // Set timeout to delete key after duration
    const timeoutId = setTimeout(() => {
        this.cache.delete(key);
    }, duration);

    // Save value and timeoutId
    this.cache.set(key, { value, timeoutId });

    return existed;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if (this.cache.has(key)) {
        return this.cache.get(key).value;
    }
    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.cache.size;
};

