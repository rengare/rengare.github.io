class Animal {

    private _name: string;

    public get name(): string {
        return this._name;
    }

    public set name(v: string) {
        this._name = v;
    }

    constructor(name: string) {
        this.name = name;
    }

    makeSound(){
        console.log(`${this.name} wydał dzwięk`);
    }
}

let dog = new Animal('Reksio');
dog.makeSound(); // Reksio wydał dzwięk