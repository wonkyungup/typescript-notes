// 1
const add = (a: number, b:number) => {
    return a + b;
}

// 2
type AddType = (a: number, b: number) => number
const addType: AddType = (a, b) => (a + b);

