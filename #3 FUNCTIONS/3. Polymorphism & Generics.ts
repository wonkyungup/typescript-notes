type User<ExtraInfo> = {
    name: string,
    extraInfo: ExtraInfo
}

type ExtraInfo = {
    age: number
}

type GUser = User<ExtraInfo>

const user: GUser = {
    name: 'won',
    extraInfo: {
        age: 12
    }
}