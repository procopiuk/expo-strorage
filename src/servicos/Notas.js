import { db } from "./SQLite";

export function criaTabela(){
    db.transection((transection)=> {
        transection.executeSql("CREATE TABLE IF NOT EXISTS"+
        "Notas "+ "(id INTERGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, categoria TEXT, texto TEXT);"
        )
    })
}