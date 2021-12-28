export type User = {
    login: string
    password: string
    email: string
    name: string
    age: number
    phone: string
}

const userDefault: User = {
    login: 'Повыш',
    password: 'Веточка',
    email: 'повыш@повыш.повыш',
    name: 'Повыш',
    age: 0,
    phone: '+79999999999'
}

export default userDefault