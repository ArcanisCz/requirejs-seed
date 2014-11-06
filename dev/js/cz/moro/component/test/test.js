define([
    "text!./test.html",
    "text!./test.css"
], function (template, css) {
    var element = Object.create(HTMLElement.prototype);

    element.createdCallback = function() {
        var shadow = this.createShadowRoot();
        shadow.innerHTML = "<style>"+css+"</style>"+template;
    };

    document.registerElement('x-test', {prototype: element});
});