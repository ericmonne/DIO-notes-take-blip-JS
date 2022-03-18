function getAdmins(map){
    let admins = []
    for([key, value] of map){
        if (value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const USUARIOS = new Map();

USUARIOS.set('Luiz' , 'Admin');
USUARIOS.set('Stephany' , 'Admin');
USUARIOS.set('Jorge' , 'User');
USUARIOS.set('Natália' , 'Admin');

console.log(getAdmins(USUARIOS));