// type > interface

type typeObject = {
    nickname: string,
    healthBar: number
}

interface interFaceObject {
    nickname: string,
    healthBar: number
}

interface User {
    name: string
}

interface Player extends User {
}

const nico: Player = {
    name: '2'
}