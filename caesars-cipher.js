function rot13(str) {
    // CARA 1 SWITCH CASE
    // const newStr = str.split("");
    // const result = newStr.map((huruf) => {
    //     switch (huruf) {
    //         case "N":
    //             return "A";
    //         case "O":
    //             return "B";
    //         case "P":
    //             return "C";
    //         case "Q":
    //             return "D";
    //         case "R":
    //             return "E";
    //         case "S":
    //             return "F";
    //         case "T":
    //             return "G";
    //         case "U":
    //             return "H";
    //         case "V":
    //             return "I";
    //         case "W":
    //             return "J";
    //         case "X":
    //             return "K";
    //         case "Y":
    //             return "L";
    //         case "Z":
    //             return "M";
    //         case "A":
    //             return "N";
    //         case "B":
    //             return "O";
    //         case "C":
    //             return "P";
    //         case "D":
    //             return "Q";
    //         case "E":
    //             return "R";
    //         case "F":
    //             return "S";
    //         case "G":
    //             return "T";
    //         case "H":
    //             return "U";
    //         case "I":
    //             return "V";
    //         case "J":
    //             return "W";
    //         case "K":
    //             return "X";
    //         case "L":
    //             return "Y";
    //         case "M":
    //             return "Z";
    //         default:
    //             return huruf;
    //     }
    // });
    // return result.join("");

    // CARA 2 INDEX.OF
    const abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (abjad.indexOf(str[i]) === -1) {
            result += str[i];
        } else {
            let indexAwal = abjad.indexOf(str[i]);
            let indexAkhir = (indexAwal + 13) % 26;
            result += abjad[indexAkhir];
        }
    }
    return result;
}
console.log(rot13("SERR PBQR PNZC")); //HASIL => FREE CODE CAMP
