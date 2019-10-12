class Homophonic {

    constructor(input,cryptogram){
        this.input = input;
        this.cryptogram = cryptogram;
        this.alphabet = new Map([
            ['a', 0],
            ['b', 0],
            ['c', 0],
            ['d', 0],
            ['e', 0],
            ['f', 0],
            ['g', 0],
            ['h', 0],
            ['i', 0],
            ['j', 0],
            ['k', 0],
            ['l', 0],
            ['m', 0],
            ['n', 0],
            ['o', 0],
            ['p', 0],
            ['q', 0],
            ['r', 0],
            ['s', 0],
            ['t', 0],
            ['u', 0],
            ['v', 0],
            ['w', 0],
            ['x', 0],
            ['y', 0],
            ['z', 0],
            [' ', 0],
            ['.', 0],
            [',', 0],
            ['-', 0],
            [':', 0]
        ]);

        //cryptogram must be in format "[letter][counter]:[codedchar];"
        this.pattern = this.getPattern();

        // this.testPattern = new Map([
        //     ['a0', 'r'],
        //     ['a1', 'p'],
        //     ['a2', ':'],
        //     ['a3', 'z'],
        //     ['l0', 'o'],
        //     ['m0', 'u'],
        //     ['k0', ','],
        //     ['o0', 't'],
        //     ['t0', 'f'],
        //     [' 0', 'a'],
        //     [' 1', 'b'],
        //     [' 2','c']
        // ]);

        this.cyphered = this.cypher();
    }
    
    cypher(){
        var output = Array.from(this.input);
        for (let i = 0;i<output.length;i++){
            output[i]=this.swap(output[i]);
            this.alphabet.set(this.input[i],this.alphabet.get(this.input[i])+1);
        }

        return output.join("");
    }

    decypher(){
        let decyphered = Array.from(this.cyphered);
        for(let i = this.cyphered.length-1;i>=0;i--){
            decyphered[i] = this.reswap(decyphered[i]).slice(0, -1);;
            this.alphabet.set(this.input[i],this.alphabet.get(this.input[i])-1);
        }
        return decyphered.join("");
    }

    swap(char){
        let index = this.alphabet.get(char);
        return this.pattern.get(char+index.toString());
    }

    reswap(char){
        let codedLetter;
        for (let [key, value] of this.pattern.entries()) {
            if (value === char){
                //console.log(char + "=>" + key + " : " + value);
                codedLetter = key;
            }
            
          }
        return codedLetter;
    }

    getPattern()
    {
            let arr = this.cryptogram.split(';');
            //console.log(arr);
            let letter;
            let codedAs;
            let actualPattern = new Map();

            for (let i = 0; i<arr.length;i++){
                letter = arr[i].charAt(0)+arr[i].charAt(1);
                codedAs = arr[i].charAt(3);
                actualPattern.set(letter,codedAs);
            }
            //console.log(actualPattern.entries());
            return actualPattern;
    }

}

export default Homophonic;