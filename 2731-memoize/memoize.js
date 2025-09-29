/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map(); // cache to store results
    let callCount = 0;       // count of actual function calls

    const memoizedFn = function(...args) {
        // Key generation: JSON.stringify handles numbers array
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            // If already cached, return cached value
            return cache.get(key);
        }

        // Otherwise, call the function
        const result = fn(...args);
        callCount += 1;

        // Save in cache
        cache.set(key, result);
        return result;
    };

    // Attach method to get actual call count
    memoizedFn.getCallCount = function() {
        return callCount;
    };

    return memoizedFn;
}
