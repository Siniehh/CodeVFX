const SIGNS = ["+", "-", "*", "/"];

export function parse(parseString) {
    var intSubstring = "";
    var result = "";
    for (let index in parseString) {
        let character = parseString[index]
        let nextCharacter = parseString[index + 1]
        console.log(nextCharacter)

        if (SIGNS.indexOf(character) == -1) {
            if (parseInt(character) != NaN && intSubstring.length == 0) {
                console.log("start of new number")
                intSubstring = character
                continue;
            }
    
            if (nextCharacter != null) {
                let intSub = intSubstring + nextCharacter;
                if (parseInt(intSub) != NaN) {
                    var intSubstring = intSub;
                    console.log("extend old sub")
                }
            } else {
                console.log("add the whole number")
                result += intSubstring;
                intSubstring = "";
            }
        } else {
            intSubstring = "";
            console.log("this from da else")
            console.log(character)
            result += character;
        }

        index++;
    }

    if (!result) {
        return 'invalid';
    } else {
        console.log(result)
        return result;
    }
}