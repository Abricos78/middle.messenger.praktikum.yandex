import type webpack from 'webpack'
import buildPlugins from './buildPlugins'
import buildLoaders from './buildLoaders'
import buildResolve from './buildResolve'
import { type BuildOptions } from './types'
import buildDevServer from './buildDevServer'

const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
    const {
        mode,
        paths: {
            entry,
            build,
            html,
        },
        isDev,
        port,
    } = options

    return {
        mode,
        entry,
        output: {
            path: build,
            filename: '[name].[contenthash].js',
            clean: true,
        },
        plugins: buildPlugins(html),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolve(),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(port) : undefined,
    }
}

export default buildWebpackConfig
