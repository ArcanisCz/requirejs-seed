define([], function(){
    require.config({
        baseUrl: './',
        paths: {
            lib: "./lib",
            cz: "./js/cz",

            less: "./lib/less/less",
            lessc: "./lib/less/lessc",
            normalize: "./lib/less/normalize"
        },
        shim: {

        },
        less: {

        }

    });
});
