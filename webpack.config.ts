import path from 'path'
import type webpack from 'webpack'
import buildWebpackConfig from './config/build'
import { type BuildEnv, type BuildPaths } from './config/build/types'

export default (env: BuildEnv): webpack.Configuration => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        build: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'static', 'index.html'),
    }

    const mode = env.mode ?? 'development'
    const port = env.port ?? 3000

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev: mode === 'development',
        port,
    })
    return config
}
