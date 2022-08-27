const sql = require('./db.js');

const addSQL = (names, age, email, number) => {
    sql.connector.query(`INSERT INTO list_contact (id, name, age, email, number) VALUES (${null}, '${names}', '${age}', '${email}', '${number}')`, (err, result) => {
        if (err) throw err;
        console.log('Send Data');
    });
};

deleteSQL = (id) => {
    sql.connector.query(`DELETE FROM list_contact WHERE id = ${id}`, (err, result) => {
        if (err) throw err;
        console.log('Delete Data');
    })
}

const updateSQL = (id, names, age, email, number) => {
    sql.connector.query(`UPDATE list_contact SET name = '${names}', age = '${age}', email = '${email}', number = '${number}' WHERE id = ${id}`, (err, result) => {
        if (err) throw err;
        console.log('Update Data');
    })
}

module.exports = {
    addSQL,
    deleteSQL,
    updateSQL
}