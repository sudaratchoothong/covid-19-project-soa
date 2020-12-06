const { Pool } = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '2491999',
    port: 5432,
})

async function getAllCountry() {
    const sql = `SELECT "Province/State" as State , "Country/Region" as Country from covid19_confirmed_csv`
    const data = await pool.query(sql);
    console.log(data.rows);
    return data;
}
module.exports = {
    getAllCountry
}