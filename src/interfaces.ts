interface Object {
    readonly id: string;
    color?: string;
    size: {
        width: number
        height: number
    }
}

// Creating constants by Object-type
const obj1: Object = {
    id: '1234',
    color: '#ccc',
    size: {
        width: 20,
        height: 30
    }
};

const obj2: Object = {
    id: '12345',
    size: {
        width: 20,
        height: 30
    }
};
obj2.color = '#bbb';

// Setting type to constants
const someObject1 = {} as Object;
const someObject2 = <Object>{};

/*****************************************************/

interface ChildrenObject extends Object {
    getArea: () => number;
}

const object: ChildrenObject = {
    id: '123456',
    size: {
        width: 20,
        height: 30
    },
    getArea(): number {
        return this.size.width * this.size.height;
    }
};

/*****************************************************/
interface IClock {
    time: Date
    setTime(date: Date): void
}
class Clock implements IClock {
    time: Date = new Date();
    setTime(date: Date): void {
        this.time = date;
    }
}

/*****************************************************/
interface Styles {
    [key: string]: string
}
const css: Styles = {
    border: '1 px',
    marginTop: '2px'
};

