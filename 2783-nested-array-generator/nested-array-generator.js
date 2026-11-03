
/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function*(arr) {
    let stack = [{ array: arr, index: 0 }];

    while (stack.length > 0) {
        let current = stack[stack.length - 1];

        if (current.index === current.array.length) {
            stack.pop();
            continue;
        }

        let value = current.array[current.index++];

        if (Array.isArray(value)) {
            stack.push({ array: value, index: 0 });
        } else {
            yield value;
        }
    }
};
