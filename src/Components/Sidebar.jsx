import { GiPopcorn } from "react-icons/gi"
import { TiUserOutline } from "react-icons/ti"
import { useHistory } from "react-router-dom"

import '../Style/Componentes/sidebar.css'

export default function Side (){
    const { goBack } = useHistory()
    return(
        <aside className="app-sidebar">
            <footer className="btn">
                <button type="button" onClick={goBack}>
                    <GiPopcorn id="icon" size={30} color="#25065" />
                </button>
                <button id="iconUser" type="button" onClick={goBack}>
                <TiUserOutline size={30} color="#25065"/>
                </button>
            </footer>
        </aside>
    )
}


