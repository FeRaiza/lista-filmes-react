import filmes from '../Services/dados'
import '../Style/Pages/filmes.css'

import Sidebar from '../Components/Sidebar'


const Filmes = () => {
    return(
        <>
        <Sidebar/>
        <div id = "container">
            {
                filmes.map(filme=>{
                    return <div key = {filmes.id} className="card">
                        <h3>Título: {filme.nome}</h3>
                        <p>Gênero: {filme.genero}</p>
                        <p>Ano de lançamento: {filme.ano}</p>
                        <img src={filme.capa} alt="capa"/>
                        <p>Sinopse: {filme.sinopse}</p>

                    </div>
                })
            }

        </div>
        </>
       
    )
}

export default Filmes