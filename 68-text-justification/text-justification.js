
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let result = [];
    let i = 0;

    while (i < words.length) {
        let j = i;
        let totalLetters = 0;

        // Find words that fit in the current line
        while (
            j < words.length &&
            totalLetters + words[j].length + (j - i) <= maxWidth
        ) {
            totalLetters += words[j].length;
            j++;
        }

        let totalWords = j - i;
        let totalSpaces = maxWidth - totalLetters;
        let line = "";

        // Last line or single word
        if (j === words.length || totalWords === 1) {
            line = words.slice(i, j).join(" ");
            line += " ".repeat(maxWidth - line.length);
        } else {
            let gaps = totalWords - 1;
            let spaces = Math.floor(totalSpaces / gaps);
            let extra = totalSpaces % gaps;

            for (let k = i; k < j; k++) {
                line += words[k];

                if (k < j - 1) {
                    line += " ".repeat(
                        spaces + (k - i < extra ? 1 : 0)
                    );
                }
            }
        }

        result.push(line);
        i = j;
    }

    return result;
};
