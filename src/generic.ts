const arrayOfNumbers: Array<number> = [1, 2, 3];
const arrayOfStrings: Array<string> = ['One', 'Two'];

function reverse<T>(array: T[]): T[] {
    return array.reverse();
}

reverse(arrayOfNumbers);
reverse(arrayOfStrings);