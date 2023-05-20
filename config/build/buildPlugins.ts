import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'

const buildPlugins = (html: string): webpack.WebpackPluginInstance[] => {
    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: html
        })
    ]
}

export default buildPlugins
