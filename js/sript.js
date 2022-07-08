var dataBase = [
    {
        username : 'asher',
        password : 'nothing'
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


var enterUsername = prompt('Who are you?');
var enterPassword = prompt('enter your password');

function signIn (username, password){
   if( username === dataBase[0].username && password === dataBase[0].password){
         console.log('whew!!!!!!');
   } else {
      alert('sorry wrong user info');
   }
} 

signIn(enterUsername, enterPassword);