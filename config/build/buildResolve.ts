import { type ResolveOptions } from 'webpack'

const buildResolve = (): ResolveOptions => {
    return {
        extensions: ['.ts', '.js', '.scss'],
    }
}

export default buildResolve
