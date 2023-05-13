import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

const buildDevServer = (port: number): DevServerConfiguration => {
    return {
        open: true,
        port,
        historyApiFallback: true,
    }
}

export default buildDevServer
