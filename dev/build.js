({
    appDir: '../dist',
    dir: '../dev',
    baseUrl: "./",
    fileExclusionRegExp: /(^example)|(.git)|node_modules$/,
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
        lib: "./lib",
        cz: "./js/cz",

        less: "./lib/less/less",
        lessc: "./lib/less/lessc",
        normalize: "./lib/less/normalize"
    },
    shim: {

    }
})
