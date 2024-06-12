window.onload = function() {
    let randomJokeButton = document.querySelector("#get-random-joke") as HTMLButtonElement;
    randomJokeButton.onclick = getJoke;
}

function getJoke() {
    // let randomJokeUrl = "https://v2.jokeapi.dev/joke/Any?safe-mode";
    let randomJokeUrl = "https://v2.jokeapi.dev/joke/Programming?type=single&safe-mode";

    //Get the response object and return the json data
    fetch(randomJokeUrl)
        .then( //get the response object and return the json data
                (response) => response.json())
        
        .then(  (jsonData) => {
                    console.log(jsonData);
                }
        );
}

function handleResponse(response) {
    return response.json();
}

function handleData(jsonData) {

alert(jsonData);
}