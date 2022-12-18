abstract class User {
    constructor (
        protected name: string,
        protected age: number
    ) {}

    getName () {
        console.log(this.name)
    }
}

class Player extends User {
    getUser () {
        console.log(this.name)
    }
}

const player = new Player('name', 30)