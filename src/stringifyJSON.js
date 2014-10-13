var stringifyJSON = function(obj) {
    var objElements = [];
    //check for literals
    if (!(obj instanceof Object))
        return typeof obj === 'string' ? '"' + obj + '"' : '' + obj;
    //check for arrays
    else if (Array.isArray(obj)) {
        return '[' + obj.map(function(el) { return stringifyJSON(el); }) + ']';
    //check for object if not array
    } else if (obj instanceof Object) {
        for (var key in obj) {
            if (obj[key] instanceof Function)
                return '{}';
            else
                objElements.push('"' + key + '":' + stringifyJSON(obj[key]));
        }
        return '{' + objElements + '}';
    }
};
