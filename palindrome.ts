class Palindrome {
    check(word:string): boolean {

        if (!word || word.trim() === ""){
            throw new Error ("El campo no puede estar vacio")
        }
       const limpio = word.toLowerCase().replace(/\s/g, "")
       const reversa = limpio.split("").reverse().join("")
       return limpio === reversa

    }
}


function printResult (word: string) {
    try {
    const palindrome = new Palindrome()
    const resultado = palindrome.check(word)
    console.log(`"${word}" - ${resultado ? "si es palindromo": "no es palindromo"}`)
}catch (error)
{
    console.error(`${error}`)
}
}



printResult("this is a test")
printResult("a MAN a plan A CANAL panama")
printResult("level")
printResult("test")
printResult("")



