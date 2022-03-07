const pgp = require('pg-promise')({});
const db = pgp('postgres://postgres:1234@localhost:5432/Bdate');

function getBday(){
    return db.any('SELECT * FROM birthDate');
}

function addPerson(n1,d1){
    return db.any('INSERT INTO birthDate (name,date) VALUES ($1,$2)',[n1,d1]);
}

function getDatabyId(id){
    return db.any('SELECT * FROM birthDate WHERE id = $1',[id]);
}

function deleteIteam(id){
    let a = db.any('SELECT * FROM birthDate WHERE id = $1',[id])
     db.any('DELETE FROM birthDate WHERE id = $1',[id])
     return (a)
}
module.exports ={
    getBday,
    addPerson,
    getDatabyId,
    deleteIteam
}