/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
    const nums = this; // current array

    // invalid হলে খালি ফেরত
    if (rowsCount * colsCount !== nums.length) {
        return [];
    }

    // খালি matrix তৈরি
    const matrix = Array.from({ length: rowsCount }, () => []);
    let index = 0;

    for (let col = 0; col < colsCount; col++) {
        if (col % 2 === 0) {
            // even column → top to bottom
            for (let row = 0; row < rowsCount; row++) {
                matrix[row][col] = nums[index++];
            }
        } else {
            // odd column → bottom to top
            for (let row = rowsCount - 1; row >= 0; row--) {
                matrix[row][col] = nums[index++];
            }
        }
    }
    return matrix;
};


/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */