import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import s from "./style.module.css";
import { Header } from "../header";
import axios from "axios";
import {useForm} from "react-hook-form";

export function Inscription() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [photoFileName, setPhotoFileName] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      // Envoyer l'URL de la photo au backend
      const response = await axios.post('http://localhost:5051/inscription/', { ...data, photo: `/photos/${photoFileName}` });
      console.log(response.data);
      navigate('/connexion');

    } catch (error) {
      console.error(error);
    }
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    const fileName = `photo_${Date.now()}.${file.name.split('.').pop()}`; // Générer un nom de fichier unique
    setPhotoFileName(fileName); // Stocker temporairement le nom de fichier de la photo
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const photoDataUrl = reader.result; // Obtenez l'URL de la photo en tant que base64
      // Stockez la photo dans le dossier public/photos
      const img = new Image();
      img.src = photoDataUrl;
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        canvas.toBlob((blob) => {
          const formData = new FormData();
          formData.append('photo', blob, fileName);
          fetch(`${fileName}`, {
            method: 'POST',
            body: formData
          })
              .then(() => console.log('Photo uploaded successfully'))
              .catch((error) => console.error('Error uploading photo:', error));
        });
      };
    };
  };

  return (
      <div className={`p-4 min-h-screen bg-gray-100 ${s.App}`}>
        <Header />
        <h3 className="text-center text-xl font-bold mb-4">INSCRIVEZ-VOUS:</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="w-full sm:w-1/2 p-2">
            <label htmlFor="nom" className="block text-sm font-medium text-gray-700">USERNAME:</label>
            <input
                type="text"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                name="nom"
                id="nom"
                required
                {...register('username')}
            />
          </div>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full sm:w-1/2 p-2">
              <label htmlFor="nom" className="block text-sm font-medium text-gray-700">NOM:</label>
              <input
                  type="text"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  name="nom"
                  id="nom"
                  required
                  {...register('nom')}
              />
            </div>
            <div className="w-full sm:w-1/2 p-2">
              <label htmlFor="prenom" className="block text-sm font-medium text-gray-700">PRÉNOM:</label>
              <input
                  type="text"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  name="prenom"
                  id="prenom"
                  required
                  {...register('prenom')}
              />
            </div>
            <div className="w-full sm:w-1/2 p-2">
              <label htmlFor="societe" className="block text-sm font-medium text-gray-700">SOCIÉTÉ:</label>
              <input
                  type="text"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  name="societe"
                  id="societe"
                  required
                  {...register('societe')}
              />
            </div>
            <div className="w-full sm:w-1/2 p-2">
              <label htmlFor="universite" className="block text-sm font-medium text-gray-700">UNIVERSITÉ:</label>
              <input
                  type="text"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  name="universite"
                  id="universite"
                  required
                  {...register('universite')}
              />
            </div>
            <div className="w-full sm:w-1/2 p-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">EMAIL:</label>
              <input
                  type="email"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  name="email"
                  id="email"
                  required
                  {...register('email')}
              />
            </div>
            <div className="w-full sm:w-1/2 p-2">
              <label htmlFor="adresse" className="block text-sm font-medium text-gray-700">ADRESSE:</label>
              <input
                  type="text"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  name="adresse"
                  id="adresse"
                  required
                  {...register('adresse')}
              />
            </div>
            <div className="w-full sm:w-1/2 p-2">
              <label htmlFor="tel" className="block text-sm font-medium text-gray-700">TÉLÉPHONE:</label>
              <input
                  type="tel"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  name="tel"
                  id="tel"
                  required
                  {...register('telephone')}
              />
            </div>
            <div className="w-full sm:w-1/2 p-2">
              <label htmlFor="datenaissance" className="block text-sm font-medium text-gray-700">DATE DE
                NAISSANCE:</label>
              <input
                  type="date"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  name="datenaissance"
                  id="datenaissance"
                  required
                  {...register('datenaissance')}
              />
            </div>
            <div className="w-full sm:w-1/2 p-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">MOT DE PASSE:</label>
              <input
                  type="password"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  name="password"
                  id="password"
                  required
                  {...register('password')}
              />
            </div>
            <div className="w-full p-2">
              <label htmlFor="photo" className="block text-sm font-medium text-gray-700">PHOTO:</label>
              <input
                  type="file"
                  accept="image/*"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  {...register('photo')}
                  onChange={handlePhotoChange}
                  id="photo"
              />
              {errors.photo && <span className="text-red-500">Veuillez sélectionner une photo</span>}
            </div>
          </div>
          <button type="submit" className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-md w-full">
            INSCRIPTION
          </button>
          <br/>
          <Link to="/connexion" className="text-blue-500 mt-2 inline-block text-center w-full">
            Vous avez déjà un compte? Connectez-vous
          </Link>
        </form>
      </div>
  );

}
