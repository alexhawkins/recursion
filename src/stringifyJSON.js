var stringifyJSON = function(obj) {
    var elements = [];
    var objElements = [];
    if (!(obj instanceof Object)) //base case, get primitive types
        return typeof obj === 'string' ? '"' + obj + '"' : "" + obj;
    else if (Array.isArray(obj)) // get arrays, breakdown array subcomponents via recursion
        return '[' + (elements = obj.map(function(el) { return stringifyJSON(el); })) + ']';
    else { //get objects
        for (var key in obj) {
            if (obj[key] instanceof Function) //base case, get functions
                return '{}';
            if (!(obj[key] instanceof Object)) //base case, get primitive types
                typeof obj[key] === 'string' ? objElements.push('"' + key + '":"' + obj[key] + '"') : objElements.push('"' + key + '":' + obj[key]);
            else //object present, break down further via recursion;
                objElements.push('"' + key + '":' + stringifyJSON(obj[key]));
        }
        return '{' + objElements + '}';
    }
};
