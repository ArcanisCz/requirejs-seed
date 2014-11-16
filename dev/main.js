require([
    "component!cz/arcanis/game/app/app AS game-root",
    "less!css/main"
], function(mainComponentTag){
    var element = Object.create(HTMLElement.prototype);
    element.createdCallback = function() {
        this.innerHTML = "<"+mainComponentTag+"></"+mainComponentTag+">";
    };
    document.registerElement('x-app', {prototype: element});
})

