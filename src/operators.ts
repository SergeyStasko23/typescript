interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person // 'name' | 'age'

let key: PersonKeys = 'name';
key = 'age';

type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}

// Creating a new type without fields: '_id', 'createdAt'
type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'>

// Creating a new type with fields: 'name', 'email'
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>