import { Footer } from "../footer";
import s from "./style.module.css";
import { Header } from "../header";

export function Accueil() {
  return (
    <div className={s.App}>
     <Header/>
      <main>
        <section className={s.ServicesSection}>
          <h2>Nos Services</h2>
          <div className={s.Services}>
            <div className={s.Service}>
              <h3 id="formation">Formations</h3>
              <p>Découvrez nos programmes de formations pour améliorer vos compétences.</p>
            </div>
            <div className={s.Service}>
              <h3 id="tutorat">Tutorat</h3>
              <p>Recevez l'aide de nos tuteurs experts.</p>
            </div>
            <div className={s.Service}>
              <h3 id="consultation">Consultation</h3>
              <p>Profitez de nos services de consultation professionnelle.</p>
            </div>
            <div className={s.Service}>
              <h3 id="cryptomonnaie">Gestion de Cryptomonnaie</h3>
              <p>Envoyez, recevez et convertissez des cryptomonnaies facilement.</p>
            </div>
          </div>
        </section>
      </main>
     <Footer/>
    </div>
  );
}
