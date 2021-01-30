import mysql from 'mysql'

export let setupdb = async () => {
    let connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'me',
        password : 'secret',
        database : 'my_db'
    });
    
    connection.connect();
} 
    
