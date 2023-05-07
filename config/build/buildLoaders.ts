import type webpack from 'webpack'

const buildLoaders = (): webpack.RuleSetRule[] => {
    const typescriptLoader = {
        test: /\.ts?$/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    onlyCompileBundledFiles: true
                }
            }
        ],
        exclude: '/node_modules/'
    }

    const sassLoader = {
        test: /\.s[ac]ss$/i,
        exclude: '/node_modules/',
        use: [
            'style-loader',
            'css-loader',
            'sass-loader',
        ],
    }

    const handlebarsLoader = {
        test: /\.hbs/,
        loader: 'handlebars-loader',
        exclude: '/node_modules/'
    }

    const svgLoader = {
        test: /\.svg/,
        type: 'asset/inline',
        exclude: '/node_modules/',
    }

    const fileLoader = {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
            {
                loader: 'file-loader?name=./assets/fonts/webfonts/[name].[ext]'
            },
            {
                loader: 'file-loader?name=./assets/fonts/Roboto/[name].[ext]'
            }
        ]
    }

    return [
        typescriptLoader,
        svgLoader,
        handlebarsLoader,
        fileLoader,
        sassLoader,
    ]
}

export default buildLoaders
