import * as SQLite from "expo-sqlite";

function abreConexao(){
    const database = SQLite.database("db.db")
    return database
}

export const db = abreConexao()
