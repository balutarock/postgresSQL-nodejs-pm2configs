const { Client } = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "balanagendra7@",
    database: "postgres"
})

module.exports = client