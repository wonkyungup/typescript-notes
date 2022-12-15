/*
 Overloading? => Call Signatures add(2 More than)
*/

// 1
type Add1 = {
    (a: number, b: number) : number,
    (a: number, b: string) : number
}

const add1: Add1 = (a, b) => {
    if (typeof b !== 'number') return a
    return a + b
}

// 2
type Add2 = {
    (a: number, b: number) : number,
    (a: number, b: number, c: number) : number
}

const add2: Add2 = (a, b, c?:number) => {
    if (c) return a+b+c
    return a + b
}