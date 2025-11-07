import { db } from "./SQLite";

export function criaTabela(){
    db.transection((transection)=> {
        transection.executeSql("CREATE TABLE IF NOT EXISTS"+
        "Notas "+ "(id INTERGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, categoria TEXT, texto TEXT);"
        )
    })
}

export async function adicionaNota (nota) {
    return new Promisse ((resolve)=>{
        db.transaction((transaction)=>{
             transaction.executeSql("INSERT INTO Notas(titulo,categoria,texto)"+
            "VALUES (?,?,?);",[nota.titulo, nota.categoria, nota.texto], ()=>{
                resolve("Nota adicionada com sucesso!")
            })
        })
       
        })

    }


export async function buscaNotas () {
    return new Promise((resolve)=>{
        db.transcaction((transaction)=>{
            transaction.executeSql("SELECT * FROM Notas;",[],(transaction,resultado)=>{
                resolve(resultado.rows._array)
            })
        })
    })
}   



