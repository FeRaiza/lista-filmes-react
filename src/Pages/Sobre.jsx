
import Sidebar from '../Components/Sidebar'
import '../Style/Pages/sobre.css'
import Assets from '../Assets/sobre.jpg'
import { FaInstagram } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { ImGithub } from "react-icons/im"


const Sobre  = () => {
    return(
        <>
        <Sidebar/>
        <div id="page-sobre">
            <div className="conteudo">
                <main>
                    <h1 className="title">Sobre a criadora...</h1>
                    <p className="content-sobre">Admiradora de códigos, sou Técnica em Edificações, estudante do curso de Engenharia Elétrica e prestes a me formar Desenvolvedora Front-End (uhuuu). Trabalho como Analista de Negócios em uma Empresa Júnior da Universidade, e no tempo livre gosto de ler, assistir séries e filmes, jogar e brincar com meus gatos, além de estar sempre estudando e aprimorando meus conhecimentos. Busco ser uma desenvolvedora e trazer inspirar e trazer mais mulheres para o mundo dos negócios e da tecnologia! </p>
                    
                    <div className="content-img">
                        <img className="img" src={Assets} alt="Foto da Criadora"/>
                    </div>
                    <div className="redes">
                    <a href="https://www.instagram.com/fernanda.raiza.9/?hl=pt-br" className="color-icon">
                        <FaInstagram size={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/fernanda-raiza-cs/" className="color-icon">
                        <FaFacebook size={30} />
                    </a>
                    <a href="https://www.facebook.com/fernanda.raiza.9" className="color-icon">
                        <FaLinkedin size={30} />
                    </a>
                    <a href="https://github.com/FeRaiza" className="color-icon">
                        <ImGithub size={30}/>
                    </a>
                    
                    </div>
                </main>

            </div>
            
        </div>
        </>
        
    )
}

export default Sobre 