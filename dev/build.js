({
    appDir: './dev',
    dir: '../dist/build',
    baseUrl: "./",
    fileExclusionRegExp: /(^example)|(.git)|node_modules$/,
    separateCSS: true,
    modules: [
        {
            name: 'main.min',
            create: true,
            include: ['main']
        }
    ],
    optimize: "uglify2",
    uglify2: {
        output: {
            beautify: false
        },
        compress: {
        },
        mangle: true
    },

    paths: {
        main: "../main",
        css: "../css",

        lib: "../lib",
        cz: "../js/cz",

        text: "../lib/require/text",

        less: "../lib/less/less",
        lessc: "../lib/less/lessc",
        normalize: "../lib/less/normalize",
        "less-builder": "../lib/less/less-builder"
    },
    shim: {

    }
})
