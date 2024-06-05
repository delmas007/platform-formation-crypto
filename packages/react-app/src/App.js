import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Accueil} from "./Accueil/accueil";
import {Connexion} from "./connexion/connexion";
import {Inscription} from "./inscription/inscription";
import {Propos} from "./A propos/a_propos";
import {Formations} from "./Formations/formations";
import {CourseDetail} from "./CoursDetails/Cours";
import {Tutoriat} from "./Tutoriat/tutoriat";
import Crypto from "./crypto";

const App = () => {
  return(
      <BrowserRouter>
          <Routes>
                  <Route index element={<Accueil />} />
                  <Route path="/connexion" element={<Connexion />} />
                  <Route path='/inscription' element={<div><Inscription/></div>}/>
                  <Route path="/about" element={<div><Propos/></div>} />
                  <Route path="/formations" element={<div><Formations/></div>} />
                  <Route path="/course/:courseId" element={<div><CourseDetail/></div>} />
                  <Route path="/tutoriat" element={<div><Tutoriat/></div>} />
                  <Route path="/cryptomonnaie" element={<div><Crypto/></div>} />

          </Routes>
      </BrowserRouter>
  )
}

export default App;