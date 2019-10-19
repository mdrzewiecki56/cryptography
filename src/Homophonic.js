class Homophonic {

    constructor(input){
        this.input = input;
        this.alphabet = new Map([
            ['a', "ki"],
            ['b', "d"],
            ['c', ","],
            ['d', "z"],
            ['e', "apof"],
            ['f', "e"],
            ['g', "g"],
            ['h', "q"],
            ['i', "y"],
            ['j', "w"],
            ['k', "m"],
            ['l', ":"],
            ['m', "u"],
            ['n', "h"],
            ['o', "bc"],
            ['p', "v"],
            ['q', "j"],
            ['r', "-"],
            ['s', "h"],
            ['t', "rst"],
            ['u', "l"],
            ['v', "y"],
            ['w', "5"],
            ['x', "n"],
            ['y', "x"],
            ['z', "0"],
            [' ', "["],
            ['.', "2"],
            [',', "7"],
            ['-', "]"],
            [':', "8"]
        ]);

        this.cyphered = this.cypher();
    }
    
    cypher(){
        var output = Array.from(this.input);
        for (let i = 0;i<output.length;i++){
            output[i]=this.swap(output[i]);
        }

        return output.join("");
    }

    decypher(){
        let decyphered = Array.from(this.cyphered);
        for(let i = 0;i<this.cyphered.length;i++){
            decyphered[i] = this.reswap(decyphered[i]);
            console.log(decyphered);
        }

        return decyphered.join("");
    }

    swap(char){
        let pack = this.alphabet.get(char);
        let postition = Math.floor(Math.random() * pack.length);

        return pack.charAt(postition);
    }

    reswap(char){
        let codedLetter;
        for (let [key, value] of this.alphabet.entries()) {
            if (value.includes(char))
                codedLetter = key;    
        }
        return codedLetter;
    }

}

export default Homophonic;