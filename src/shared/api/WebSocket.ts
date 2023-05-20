import EventBus from '../common/EventBus'

export enum WSTransportEvents {
    Connected = 'connected',
    Error = 'error',
    Message = 'message',
    Close = 'close',
}

class WSocket extends EventBus {
    #socket: WebSocket | null = null
    #pingInterval: NodeJS.Timer | number = 0

    constructor(private readonly url: string) {
        super()
    }

    send(data: unknown): void {
        if (!this.#socket) {
            throw new Error('Socket is not connected')
        }

        this.#socket.send(JSON.stringify(data))
    }

    connect(): Promise<void> {
        this.#socket = new WebSocket(this.url)

        this.#subscribe(this.#socket)

        this.#setupPing()

        return new Promise((resolve) => {
            this.on(WSTransportEvents.Connected, () => {
                resolve()
            })
        })
    }

    close(): void {
        this.#socket?.close()
    }

    #setupPing(): void {
        this.#pingInterval = setInterval(() => {
            this.send({ type: 'ping' })
        }, 5000)

        this.on(WSTransportEvents.Close, () => {
            clearInterval(this.#pingInterval)

            this.#pingInterval = 0
        })
    }

    #subscribe(socket: WebSocket): void {
        socket.addEventListener('open', () => {
            this.emit(WSTransportEvents.Connected)
        })
        socket.addEventListener('close', () => {
            this.emit(WSTransportEvents.Close)
        })

        socket.addEventListener('error', (e) => {
            this.emit(WSTransportEvents.Error, e)
        })

        socket.addEventListener('message', (message) => {
            const data = JSON.parse(message.data)

            if (data.type && data.type === 'pong') {
                return
            }

            this.emit(WSTransportEvents.Message, data)
        })
    }
}

export default WSocket
