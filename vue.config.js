const PUBLIC_PATH = process.env.publicPath || "/";

module.exports = {
    publicPath: PUBLIC_PATH,
    devServer: {
        host: "0.0.0.0",
        port: 9076,
        disableHostCheck: true
    },
    pages: {
        index: {
            entry: "src/main.js",
            title: "My App>"
        }
    },
    css: {
        loaderOptions: {
            sass: {
                sourceMap: true,
                prependData: '@import "@/assets/main.scss";'
            }
        }
    },
    chainWebpack: config => {
        const svgRule = config.module.rule("svg");
        svgRule.uses.clear();
        svgRule
            .use("babel-loader")
            .loader("babel-loader")
            .end()
            .oneOf("inline")
            .resourceQuery(/inline/)
            .use("vue-svg-loader")
            .loader("vue-svg-loader")
            .options({
                svgo: {
                    plugins: [{removeHiddenElems: false}]
                }
            })
            .end()
            .end()
            .oneOf("external")
            .use("file-loader")
            .loader("file-loader")
            .options({
                name: "assets/[name].[hash:8].[ext]"
            });
    }
};
