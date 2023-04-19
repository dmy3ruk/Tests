const posiblePaswordAndLogin=[{login:'Feyre', password:'acotar'}, 
{login:'Rowan', password:'tog'},
{login:'Poppy', password:'fbaa'}]
function checkLoginAndPassword(login, password){
   if(login !== 'Rowan'){
     return 'invalid login or password';
   } else if (password !== 'tog'){
     return 'invalid login or password';
   } else if(login==='Rowan' && password==='tog'){
     return 'welcome to throne of glass';
   }else if (login !== 'Rowan' && password !== 'tog'){
    return('invalid login or password');
   }
 }
module.exports = checkLoginAndPassword;