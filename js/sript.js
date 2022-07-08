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

var timeLine = [
    {
        username : 'nissi',
        password : 'im a diamond'
    },
    {
        username : 'david',
        password : 'call me Nyame Ay3, i feel good'
    },
    {
        username : 'zion',
        password : 'Star boy is my name'
    },
    {
        username : 'bumike',
        password : 'Im one in a million'
    },
    {
        username : 'asher',
        password : 'my delicacies are fit for a king'
    },
]




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