//Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. 
// Words will be separated by only one space. 


function capital(str) {
    let words = [];
    for (let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }
    return words.join(' ');
}


console.log(capital("need to code like this everyday"));