import s from "./style.module.css"
import { Link, useLocation  } from "react-router-dom"


export function Header(){
    const location = useLocation();
    return (
        <header className={s.AppHeader}>
        <div className={s.HeaderButtons}>
        {location.pathname !== "/connexion" && ( // Vérifie si l'URL est différente de "/connexion"
        <Link to="/connexion"><button className={s.Button}>Connexion</button>
        </Link>
         )}
        {location.pathname !== "/inscription" && ( // Vérifie si l'URL est différente de "/inscription"
          <Link to="/inscription">
            <button className={s.Button}>Inscription</button>
          </Link>
        )}
        </div>
        <h1>Bienvenue sur la plateforme YTG</h1>
        <p>
        {location.pathname !== "/" && (
           <Link to="/">Accueil</Link>  
        )}
        {location.pathname !== "/" && " | "}
        {location.pathname !== "/formations" && (
        <Link to="/formations">Formations</Link> 
        )}
        {location.pathname !== "/formations" && " | "} 
        {location.pathname !== "/tutoriat" && (
        <Link to="/tutoriat">Tutorat</Link>  
        )}
        {location.pathname !== "/tutoriat" && " | "} 
        <Link to="/">Consultation</Link>  | 
        <Link to="/">Gestion de Cryptomonnaie</Link> |
        <Link to="/about">A Propos</Link> 
        </p>
        
      </header>
    )
}