import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

const buildDevServer = (port: number): DevServerConfiguration => {
    return {
        open: true,
        port,
    }
}

export default buildDevServer
