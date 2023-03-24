export type User = {
    id: number
    first_name: string
    second_name: string
    display_name: string
    login: string
    email: string
    phone: string
    avatar: string
}

export interface Message {
    chat_id: number
    time: string
    type: string
    user_id: number
    content: string
}
