import s from "./style.module.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {useEffect, useState} from "react";


export function Header(){
    const location = useLocation();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Vérifier si l'utilisateur est connecté
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        navigate('/connexion');
    };
    return (
        <header className={s.AppHeader}>
            <div className={s.HeaderButtons}>
                <div className="flex justify-end space-x-4 mb-4">
                    {!isLoggedIn && location.pathname !== "/connexion" && (
                        <Link to="/connexion">
                            <button className={s.Button}>Connexion</button>
                        </Link>
                    )}
                    {!isLoggedIn && location.pathname !== "/inscription" && (
                        <Link to="/inscription">
                            <button className={s.Button}>Inscription</button>
                        </Link>
                    )}
                    {isLoggedIn && (
                        <button onClick={handleLogout} className={s.Button}>Déconnexion</button>

                    )}
                </div>
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
                <Link to="/">Consultation</Link> |
                {location.pathname !== "/cryptomonnaie" && (
                    <Link to="/cryptomonnaie">Gestion de Cryptomonnaie</Link>
            )}
            {location.pathname !== "/cryptomonnaie" && " | "}
        <Link to="/about">A Propos</Link> 
        </p>
        
      </header>
    )
}