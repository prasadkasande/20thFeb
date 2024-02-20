document.getElementById("userInput").addEventListener("input",countCharacters);

function countCharacters(){
    let input = document.getElementById("userInput").value;

    let alphaCount = 0;

    let digiCount = 0;

    let specialCount = 0;

    for(let i=0; i<input.length; i++){

        let char = input.charAt(i);

        if(char.match(/[a-zA-Z]/)){
            alphaCount++;
        }else if(char.match(/[0-9]/)){
            digiCount++
        }else if (char !== ' '){
            specialCount++;
        }
    }

    document.getElementById("alphabet").innerText = "Alphabet Count : "+alphaCount;
    document.getElementById("digit").innerText = "Digit Count : " +digiCount;
    document.getElementById("special").innerText = "Special Character Count : "+specialCount;

}