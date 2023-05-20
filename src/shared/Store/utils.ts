type ObjectType = Record<string, unknown>

function merge(store: ObjectType, newParams: ObjectType): ObjectType {
    for (const param in newParams) {
        if (!newParams.hasOwnProperty(param)) continue

        try {
            if ((newParams[param] as ObjectType).constructor === Object) {
                newParams[param] = merge(store[param] as ObjectType, newParams[param] as ObjectType)
            } else {
                store[param] = newParams[param]
            }
        } catch (e) {
            store[param] = newParams[param]
        }
    }

    return store
}

export function set(state: ObjectType, path: string, value: unknown): void {
    if (typeof state !== 'object' || state === null) return state
    const result = path.split('.').reduceRight((acc, key) => ({
        [key]: acc
    }), value)

    merge(state, result as ObjectType)
}
