class Typescript {
    version: string;

    constructor(version: string) {
        this.version = version;
    }

    info(name: string) {
        return `${name}: Typescript version is ${this.version}`
    }
}

class Car {
    readonly numberOfWheels: number = 4;
    constructor(readonly model: string) {}
}
/***********************************************************/
class Animal {
    protected voice: string = '';
    public color: string = 'black';

    private go() {
        console.log('Go');
    }
}

class Cat extends Animal {
    public setVoice(voice: string) {
        this.voice = voice;
    }
}
const cat = new Cat();
cat.setVoice('meow');
cat.color = 'black';
/***********************************************************/
abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render(): void {
        console.log('render')
    }

    info(): string {
        return 'string';
    }
}
