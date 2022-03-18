function verificaPalindromo01(string){
    if (!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo01("ovo"));

function verificaPalindromo02(string){
    if(!string) return "string inexistente";

    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length - 1 - i]){
            return false;
        }
    }

    return true;
}

var palavra = "atchim";
console.log(verificaPalindromo02(palavra));

