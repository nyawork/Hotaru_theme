module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap((args) => {
                args[0].title = "CandiVerse";
                return args;
            })
    },
    configureWebpack: {
        externals: {
            "axios": "axios",
        }
    }
};