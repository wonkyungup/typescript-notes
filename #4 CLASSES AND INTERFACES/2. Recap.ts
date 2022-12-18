type Words = {
    [key:string]: string
}

class Word {
    constructor(
        public term: string,
        public def: string
    ) {}
}

class Dict {
    private words: Words
    constructor() {
        this.words = {}
    }

    add (word: Word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def
        }
        return undefined
    }

    def(term: string) {
        if (term !== undefined) {
            return this.words[term]
        }
        return undefined
    }

    update (word: Word) {
        if (this.words[word.term] !== undefined) {
            this.words[word.term] = word.def
        }
        return undefined
    }

    delete (term: string) {
        if (this.words[term] !== undefined) {
            return delete this.words[term]
        }
        return undefined
    }
}

const kimchi = new Word('kimchi', 'korea')
const dict = new Dict()

dict.add(kimchi)
console.log(dict.def('kimchi'))

dict.update(new Word('kimchi', 'is korea'))
console.log(dict.def('kimchi'))

dict.delete('kimchi')
console.log(dict.def('kimchi'))