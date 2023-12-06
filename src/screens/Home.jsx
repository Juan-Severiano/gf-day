import { useState } from "react"
import Header from "../components/Header"
import ToTop from "../components/ToTop"


function Home() {
  const [wordPass, setWordPass] = useState('')
  const [header, setHeader] = useState(false)

  const verify = () => {
    if (wordPass === 'igor') {
      setHeader(true)
    }
  }

  const handleChange = (e) => {
    setWordPass(e.target.value)
  }

  return (
    <>
    {header === true ? <Header /> : <Header false /> }
      
      <ToTop />
      <main className="container-fluid row row-cols-2">
        <div className="img"></div>
        <aside className="col text-container">
          <p>minamur, completamos 2 meses, caraca, que incrível poder dizer que tenho a melhor, a maior, a mais magnífica namorada do mundo todinho.</p>
          <p>É incrível que foram só dois meses mas parece um tempão, te amo muitão amor, você sabe que não sou lá muito com com palavras e tals, me atrapalho todo, estou happy happy escrevendo isso por ser pra minha nega.</p>
          <p>Não, não tem só isso. mas você tem que acertar a palavra chave para acessar as outras páginas KKKKKKKKKKKKKKKKKKKKKKKKKKKKK
            ai como é bom ser pogramador.</p>
          <p>Fiz isso de todo meu coração pra minha gatinha, espero que você goste amor😍💕</p>
          <form>
            <label htmlFor="input">bote a palavrinha mágica {wordPass}</label>
            <div>
              <input id="input" type="text" placeholder="magic message here" value={wordPass} onChange={handleChange} />
              <button type="button" className="btn btn-outline-success" onClick={verify}>verify</button>
            </div>
          </form>
        </aside>
      </main>
    </>
  )
}

export default Home
