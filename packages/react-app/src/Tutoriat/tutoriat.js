import React, {useEffect, useState} from "react";
import { Header } from "../header";
import s from "./style.module.css";
import {useForm} from "react-hook-form"; // Import the CSS module
import { jwtDecode } from 'jwt-decode';




export function Tutoriat() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [showModal, setShowModal] = useState(false);
  const [showModale, setShowModale] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [publications, setPublications] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
    fetch('http://localhost:5050/tutos/')
        .then(response => response.json())
        .then(data => {
          // Trier les publications par date de publication (du plus récent au plus ancien)
          const sortedData = data.sort((a, b) => new Date(b.datePublication) - new Date(a.datePublication));
          setPublications(sortedData);

        })
        .catch(error => console.error('Error fetching data:', error));
  }, [showModale===true]);


  const onSubmit = (data) => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      const etudiantId = decodedToken.id; // Assurez-vous que le claim ID est correctement défini dans le token

      const tutorialData = {
        titre: data.title,
        description: data.description,
        coutMensuel: data.coutMensuel, // Ajouter un champ pour le coutMensuel si nécessaire
        dateDebut: data.startDate,
        etudiants: etudiantId, // Utiliser l'ID extrait du token JWT
      };

      fetch('http://localhost:5050/tuto/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tutorialData),
      })
          .then(response => {
            if (response.ok) {
              setShowModale(true)
              console.log('Tutorial added successfully');
              setShowModale(false )
            } else {
              console.error('Failed to add tutorial');
            }
          })
          .catch(error => console.error('Error:', error));
    } else {
      console.error('No token found');
    }
  };

  const toggleModal = () => {
    if (isLoggedIn) {
      setShowModal(!showModal);
    } else {
      setShowAlert(true);
    }
  };

  return (
      <div className="font-sans p-6 bg-gray-100 min-h-screen">
        <Header />
        <div className="max-w-7xl mx-auto">
          <button
              onClick={toggleModal}
              className={`mt-4 py-2 px-4 rounded-md bg-blue-600 text-white`}

          >
            Ajouter un cours
          </button>
          {showAlert && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md my-4">
                <p>Veuillez vous connecter ou vous inscrire pour pouvoir publier.</p>
              </div>
          )}
          <h1 className="text-3xl font-bold text-center mb-8">Cours Offerts</h1>
          <div className="p-4 min-h-screen bg-gray-100">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">Liste des Publications</h1>
              {publications.map((publication, index) => (
                  <div key={index} className="mb-8 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
                    <div className="flex items-center mb-4">
                      <div
                          className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                        {publication.etudiant.photo ?
                            <img src={publication.etudiant.photo} alt="Profile"
                                 className="w-full h-full object-cover"/> :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" className="w-6 h-6 text-gray-600">
                              <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 11.25a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zm.75 6h-1.5A6.75 6.75 0 004.5 18h15a6.75 6.75 0 00-6.75-6.75z"/>
                            </svg>
                        }
                      </div>
                      <div className="ml-4">
                        <h2 className="text-xl font-semibold">{publication.etudiant.prenom} {publication.etudiant.nom}</h2>
                        <p className="text-gray-500">{new Date(publication.datePublication).toLocaleString()}</p>
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold mb-2 text-blue-700">{publication.titre}</h3>
                    <p className="mb-4 text-gray-700">{publication.description}</p>
                    {publication.etudiant.telephone && (
                        <p className="mb-2 text-gray-900"><strong>Téléphone:</strong> {publication.etudiant.telephone}
                        </p>
                    )}
                    {publication.coutMensuel && (
                        <p className="mb-2 text-gray-900"><strong>Coût mensuel::</strong> {publication.coutMensuel} fcfa
                        </p>
                    )}
                    <p className="mb-2 text-gray-900"><strong>Email:</strong> {publication.etudiant.email}</p>
                    <p className="mb-2 text-gray-900"><strong>Université:</strong> {publication.etudiant.universite}</p>
                    {publication.etudiant.societe && (
                        <p className="mb-2 text-gray-900"><strong>Société:</strong> {publication.etudiant.societe}</p>
                    )}
                  </div>
              ))}
            </div>
          </div>

          {showModal && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h1 className="text-3xl font-bold text-center mb-8">Inscription aux Cours</h1>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-lg mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div>
                        <label className="block font-medium text-gray-700">Titre</label>
                        <input
                            type="text"
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            {...register('title', {required: true})}
                        />
                        {errors.title && <span className="text-red-500">Ce champ est requis</span>}
                      </div>
                      <div>
                        <label className="block font-medium text-gray-700">Cout</label>
                        <input
                            type="number"
                            step="0.01" // Définit le pas pour les valeurs décimales
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            {...register('coutMensuel', {required: true})}
                        />
                        {errors.coutMensuel && <span className="text-red-500">Ce champ est requis</span>}
                      </div>
                      {/*<div>*/}
                      {/*  <label className="block font-medium text-gray-700">Description</label>*/}
                      {/*  <input*/}
                      {/*      type="text"*/}
                      {/*      className="mt-1 p-2 border border-gray-300 rounded-md w-full"*/}
                      {/*      {...register('description', {required: true})}*/}
                      {/*  />*/}
                      {/*  {errors.description && <span className="text-red-500">Ce champ est requis</span>}*/}
                      {/*</div>*/}
                      <div className="mb-4">
                        <label htmlFor="descriptionTexte" className="block text-sm font-medium text-gray-700 mb-1">Description
                          Longue</label>
                        <textarea
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            id="descriptionTexte"
                            {...register('description', {required: 'La description longue est requise'})}
                        />
                        {errors.descriptionTexte &&
                            <span className="text-red-500 text-sm">{errors.descriptionTexte.message}</span>}
                      </div>
                      <div>
                        <label className="block font-medium text-gray-700">Date de Début</label>
                        <input
                            type="date"
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            {...register('startDate', {required: true})}
                        />
                        {errors.startDate && <span className="text-red-500">Ce champ est requis</span>}
                      </div>
                    </div>
                    <button type="submit" className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-md w-full">
                      Inscription
                    </button>
                  </form>
                  <button onClick={toggleModal} className="mt-4 py-2 px-4 bg-red-600 text-white rounded-md">
                    Fermer
                  </button>
                </div>
              </div>
          )}
        </div>
      </div>
  );
}
