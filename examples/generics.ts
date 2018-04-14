class MyOwnGenericCollection<T>{
    collection: T[] = [];

    add(item: T) {
        this.collection.push(item);
    }

    get(): T[] {
        return this.collection;
    }
}

let collection = new MyOwnGenericCollection<string>();
collection.add("1")

console.log(collection);
// interface + abstract class