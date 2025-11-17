/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows = Array.from({length: 9}, () => new Set());
    let cols = Array.from({length: 9}, () => new Set());
    let boxes = Array.from({length: 9}, () => new Set());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let num = board[i][j];

            if (num === ".") continue;

            let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

            if (rows[i].has(num)) return false;
            rows[i].add(num);

            if (cols[j].has(num)) return false;
            cols[j].add(num);

            if (boxes[boxIndex].has(num)) return false;
            boxes[boxIndex].add(num);
        }
    }
    return true;
};