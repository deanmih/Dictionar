let words = [];

function showSavedWord() {
    let newWord = document.getElementById('savedWord').value;
    words.push(newWord);
}

function lookForWord() {
    let searchedWord = document.getElementById('searchedWord').value;
    if (words.includes(searchedWord) == true) {
        alert("The word you are looking for exists");
    } else {
        alert("The word you are looking for does not exist");
    }
}

