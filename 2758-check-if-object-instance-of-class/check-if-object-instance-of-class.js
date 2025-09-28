/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    if (obj === null || obj === undefined) return false;
    if (typeof classFunction !== "function") return false;

    const typeMap = {
        "Number": "number",
        "String": "string",
        "Boolean": "boolean",
        "BigInt": "bigint",
        "Symbol": "symbol"
    };

    const className = classFunction.name;

    // primitive types
    if (className in typeMap) {
        return typeof obj === typeMap[className] || obj instanceof classFunction;
    }

    // special case: Object can wrap primitive
    if (classFunction === Object) {
        return typeof obj === "object" || typeof obj === "function" || 
               ["number", "string", "boolean", "bigint", "symbol"].includes(typeof obj);
    }

    try {
        return obj instanceof classFunction;
    } catch {
        return false;
    }
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */