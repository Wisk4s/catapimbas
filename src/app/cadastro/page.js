'use client'
import styles from '../page.module.css'
import Link from 'next/link'
import { useState } from 'react'

export default function Cadastro() {

    const [nome, setNome] = useState();
    const [num_inscricao, setNum_Inscricao] = useState();
    const [curso, setCurso] = useState();
  
    const cadastro = () => {
      const aluno = {
        nome,
        num_inscricao,
        curso
      }

      const alunoJson = JSON.stringify(aluno);
      const req = fetch("http://localhost:3004/alunos",{
        method: "POST",
        headers: {
            'Content-Type' : 'application/json'
        },
        body: alunoJson
      })
      console.log(req);
      alert("Aluno cadastrado com sucesso!")
    }

    return(
        <main className={styles.main}>
           <h1 className="cadastro">Cadastro</h1>

            <form className="form" method="submit" onSubmit={cadastro}>

                <input className="input" name="nome" type="text" placeholder="Informe o nome" onChange={e => setNome(e.target.value)}/><br/>
                <input className="input" name="num_inscricao" type="number" placeholder="Informe o número de inscrição" onChange={e => setNum_Inscricao(e.target.value)}/><br/>
                <input className="input" name="curso" type="text" placeholder="Informe o curso" onChange={e => setCurso(e.target.value)}/><br/>

                <button>Cadastrar</button>
            </form>

            <Link href="/" className="voltar">Voltar</Link>
        </main>
    )
}