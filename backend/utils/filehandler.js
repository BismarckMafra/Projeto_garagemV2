const fs = require('fs')
const path = require('path')

const dataPath = path.join(__dirname, '../data/users.json');

function readUsers(){
    try{
        const data = fs.readFileSync(dataPath, 'utf8')
         return JSON.parse(data);
    }catch(err){
        return []
    }   
}

function saveUser(users){
    fs.writeFileSync(dataPath, JSON.stringify(users, null, 2));
}

module.exports = {
    saveUser, readUsers
}