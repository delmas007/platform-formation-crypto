import axios from "axios";

export function utilisateurApi() {
    return {
        connexionUtilisateur: (username, password) => {
            const authentification = { username, password };
            console.log(authentification);
            return axios.post('http://localhost:5051/connexion/', authentification);
        },
        inscriptionUtilisateur: (etudiantDto) => {
            return axios.post('http://localhost:5051/inscription/', etudiantDto);
        }
    }
}