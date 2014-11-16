define([
], function () {

    function load(path, localRequire, done, config) {
        path = path.split(/ AS /i);
        if (path[1]) {
            _load(path[1], path[0],localRequire, done);
        } else {
            var fileName = path[0].split("/").slice(-1)[0];
            _load(fileName, path[0],localRequire, done);
        }

    };

    function _load(name, path, localRequire, done) {
        localRequire([path], function (definition) {
            document.registerElement(name, {prototype: definition});
            done(name);
        });
    }

    return {
        load: load,
        pluginBuilder: './builder'
    };
});