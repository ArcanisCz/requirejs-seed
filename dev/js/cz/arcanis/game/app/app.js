define([
    "text!./app.html"
], function (template) {
    var element = Object.create(HTMLElement.prototype);

    element.createdCallback = function() {
        this.innerHTML = template;
    };

    return element;
});