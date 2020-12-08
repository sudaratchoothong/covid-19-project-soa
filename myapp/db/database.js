const { Pool } = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '2491999',
    port: 5432,
})

async function getAllCountry() {
    const sql = `select "Country/Region" as country, sum(confirmed_csv."3/23/2020") as conf , sum(death_csv."3/23/2020") as death , sum(recovered_csv."3/23/2020") as recovered 
    from city_csv,confirmed_csv,death_csv,recovered_csv 
    where city_csv.num = confirmed_csv.num and city_csv.num = death_csv.num and city_csv.num = recovered_csv.num
    group by "Country/Region" 
`
    const data = await pool.query(sql);
    console.log(data.rows);
    return data;
}
async function getMap() {
    const sql = `select  "Country/Region" as country,lat,long,"Province/State" as province, confirmed_csv."3/23/2020" as conf , death_csv."3/23/2020" as death , recovered_csv."3/23/2020" as recovered 
    from city_csv,confirmed_csv,death_csv,recovered_csv 
    where city_csv.num = confirmed_csv.num and city_csv.num = death_csv.num and city_csv.num = recovered_csv.num and  confirmed_csv."3/23/2020">0`
    const data = await pool.query(sql);
    console.log(data.rows);
    return data;
}
async function getconf() {
    const sql = `select  "Country/Region" as country ,"Province/State" as province , "1/23/2020" as date1 , "2/23/2020" as date2 ,"3/23/2020" as date3
    from city_csv,confirmed_csv
    where city_csv.num = confirmed_csv.num and "3/23/2020">0
    order by "3/23/2020" desc
    
    `
    const data = await pool.query(sql);
    console.log(data.rows);
    return data;
}

async function getdead() {
    const sql = `select  "Country/Region" as country ,"Province/State" as province , "1/23/2020" as date1 , "2/23/2020" as date2 ,"3/23/2020" as date3
    from city_csv,death_csv
    where city_csv.num = death_csv.num and "3/23/2020">0
    order by "3/23/2020" desc
    
    
    `
    const data = await pool.query(sql);
    console.log(data.rows);
    return data;
}

async function getrecover() {
    const sql = `select  "Country/Region" as country ,"Province/State" as province , "1/23/2020" as date1 , "2/23/2020" as date2 ,"3/23/2020" as date3
    from city_csv,recovered_csv 
    where city_csv.num = recovered_csv.num and "3/23/2020">0
    order by "3/23/2020" desc    
    `
    const data = await pool.query(sql);
    console.log(data.rows);
    return data;
}

async function getthai() {
    const sql = `select  "Country/Region" as country , confirmed_csv."3/23/2020" as c_date , death_csv."3/23/2020" as d_date ,recovered_csv."3/23/2020" as r_date
    from city_csv,recovered_csv ,death_csv,confirmed_csv
    where city_csv.num = recovered_csv.num and city_csv.num = confirmed_csv.num and city_csv.num = death_csv.num and "Country/Region" = 'Thailand'    
    `
    const data = await pool.query(sql);
    console.log(data.rows);
    return data;
}
async function getworld() {
    const sql = `select   sum(confirmed_csv."3/23/2020") as c_date , sum(death_csv."3/23/2020") as d_date ,sum(recovered_csv."3/23/2020") as r_date
    from city_csv,recovered_csv ,death_csv,confirmed_csv
    where city_csv.num = recovered_csv.num and city_csv.num = confirmed_csv.num and city_csv.num = death_csv.num
    
    `
    const data = await pool.query(sql);
    console.log(data.rows);
    return data;
}

async function gettable() {
    const sql = `select "Country/Region" as country,"Province/State" as province,confirmed_csv."3/23/2020" as conf , death_csv."3/23/2020" as death , recovered_csv."3/23/2020" as recovered 
    from city_csv,confirmed_csv,death_csv,recovered_csv 
    where city_csv.num = confirmed_csv.num and city_csv.num = death_csv.num and city_csv.num = recovered_csv.num
    order by "Country/Region"  asc
`
    const data = await pool.query(sql);
    console.log(data.rows);
    return data;
}

module.exports = {
    getAllCountry,
    getMap,
    getconf,
    getdead,
    getrecover,
    getthai,
    getworld,
    gettable
}