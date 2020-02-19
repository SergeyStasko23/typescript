const string: string = 'Hello';
const isLoading: boolean = true;
const integer: number = 42;
const float: number = 4.2;
const num: number = 3e10;
const array1: number[] = [1, 2, 3, 4, 5];
const array2: Array<number> = [1, 2, 3, 4, 5];
const contact: [string, number] = ['Stacy', 1234567];

let variable: any;
variable = 42;
variable = 'string';

function getText(text: string): void {
    console.log('Текст');
}

function throwError(text: string): never {
    throw new Error(text);
}

// Creating types
type Login = string;
const login: Login = 'string';

type ID = string | number;
const id1: ID = '1';
const id2: ID = 1;