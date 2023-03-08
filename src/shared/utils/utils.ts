
export const getRandomUuid = (length = 36): string => crypto.randomUUID().slice(0, length)
