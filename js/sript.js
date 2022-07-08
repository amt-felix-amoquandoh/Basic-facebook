var dataBase = [
    {
        username : 'asher',
        password : 'nothing'
    },

    {
        username : 'mimi',
        password : 'something'
    },

]

var timeLine = document.getElementById('gallery');




function validUser (username, password) {
    for ( i = 0; i < dataBase.length; i++){
        if(dataBase[i].username === username && dataBase[i].password === password){
            return true;
        } 
    }
    return false;
}

function signIn(username, password){
    if(validUser(username,password)){
        console.log(timeLine);
    } else{
        alert('sorry wrong user');
    }
    
}

var enterUsername = prompt('Who are you?');
var enterPassword = prompt('enter your password');

signIn(enterUsername, enterPassword);