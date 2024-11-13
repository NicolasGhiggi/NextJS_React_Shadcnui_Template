import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: '#',
});

export async function query(sql: string, values?: any) {
    const [results] = await pool.execute(sql, values);
    return results;
}