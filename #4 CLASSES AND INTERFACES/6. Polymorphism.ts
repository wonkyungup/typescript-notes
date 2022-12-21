interface SStorage<T> {
    [key:string]: T
}

class LocalStorage<T> {
    private storage: SStorage<T> = {}
    set(key: string, value: T) {
        this.storage[key] = value
    }

    get(key:string): T {
        return this.storage[key]
    }

    update(key:string, value: T) {
        this.storage[key] = value
    }

    remove(key:string) {
        delete this.storage[key]
    }

    clear () {
        this.storage = {}
    }
}

const stringsStorage = new LocalStorage<string>()
const booleanStorage = new LocalStorage<boolean>()
const numberStorage = new LocalStorage<number>()