"use client"
import Link from 'next/link'
import styles from './page.module.css'

export default async function Home() {

  const req = await fetch("http://localhost:3004/alunos", {
    next: { revalidate: 1 },
  });

  const data = await req.json();

  return (
   <main className={styles.main}>

    <Link className="cadastrolink" href="/cadastro">Cadastro</Link>

    {data.map(aluno =>
      <div className="aluno" key={aluno.id}>
        <p>{aluno.nome}</p>
        <p>{aluno.num_inscricao}</p>
        <p>{aluno.curso}</p>
      </div>)}
   </main>
  )
}
