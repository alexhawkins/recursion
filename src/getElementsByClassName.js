//Walk the DOM from the given parent node, looping along the element.nextSibling 
//pointer. If the current node in the loop has children, call the 
//traverseDOM function recursively. Note that this is not a straight string comparison 
//because elements can have multiple classes. Account for this.

//var $ = require('jquery')(require("jsdom").jsdom().parentWindow);
//var _ = require('underscore');   

var getElementsByClassName = function(className) {
    var elements = document.body; //our starting element in the DOM
    var matches = []; // where we'll store elements with our className
    //check for matches by traversing the DOM
    var traverseDOM = function(node) {
        //check our starting node without checking children as it may also have our class
        if (node === document.body && node.classList.contains(className))
            matches.push(node);
        //loop through all the children of our parent node (document.body)
        for (var i = 0; i < node.children.length; i++) {
            var el = node.children[i]; //set el variable to keeps things clean
            //terminating base case// node with no children
            if (el.children.length === 0) {
                if (el.hasAttribute('class') && el.classList.contains(className))
                    matches.push(el);
            //if the current child node in the loop also has children, call our 
            //traverseDOM function recursively until there are no more children left
            } else
                traverseDOM(el);
            //if no children, check if element has a class attribute to get. If so, also 
            //check if an element's list of classes contains our class, If it does
            //push to our matches array      
        }
    };
    //initialize DOM traversal
    traverseDOM(elements);
    return matches;
};
