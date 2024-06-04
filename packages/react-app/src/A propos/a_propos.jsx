import { Header } from "../header"
import s from "./style.module.css"
export function Propos(){

    return (
        <div className={s.App}>
            <Header/>
            <div className={s.AboutSection}>
                <h2>À Propos</h2>
                <div className={s.AboutContent}>
                    <div className={s.AboutItem}>
                    <h3>Vision</h3>
                    <p>Notre vision est de révolutionner la formation et la gestion de services en ligne pour les entreprises et les professionnels.</p>
                    </div>
                    <div className={s.AboutItem}>
                    <h3>Mission</h3>
                    <p>Nous nous engageons à fournir des solutions de formation et de gestion de qualité, accessibles et personnalisées pour répondre aux besoins de chaque client.</p>
                    </div>
                    <div className={s.AboutItem}>
                    <h3>Équipe</h3>
                    <p>Notre équipe est composée d'experts passionnés par l'innovation et le service client.</p>
                    </div>
                    <div className={s.AboutItem}>
                    <h3>Feuille de Route</h3>
                    <p>Découvrez notre plan stratégique et nos objectifs pour les années à venir.</p>
                    </div>
                    <div className={s.AboutItem}>
                    <h3>Partenaires</h3>
                    <p>Nous collaborons avec des partenaires de premier plan pour offrir les meilleures solutions à nos clients.</p>
                    </div>
                </div>
            </div>
        </div>
    )
       
    
}