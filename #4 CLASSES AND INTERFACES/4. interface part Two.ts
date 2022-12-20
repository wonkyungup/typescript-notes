// 추상 클래스는 자바스크립트에서 class로 나온다.
// abstract class User {
//     constructor(
//         protected fName: string,
//         protected lName: string
//     ) {}
//     abstract sayHi(name: string) : string
//     abstract fullName(): string
// }

// interface는 자바스크립트에서 class로 표시가 안된다. 그래서 더 빠르다
// class 확장 혹은 함수에서도 사용가능하다.
interface User {
    fName: string,
    lName: string,
    sayHi(name: string): string,
    fullName(): string
}

interface Human {
    health: number
}

class Player implements User, Human {
    constructor(
        public fName: string,
        public lName: string,
        public health: number
    ) {}

    fullName() {
        return `Hello ${this.fName} ${this.lName} ${this.health}`
    }

    sayHi(name: string) {
        return `Hello ${name} Myname is ${this.fullName()}`
    }
}