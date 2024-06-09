import React, { useState } from "react";
import { Header } from "../header";
import s from "./style.module.css";
import {useForm} from "react-hook-form"; // Import the CSS module
import { jwtDecode } from 'jwt-decode';


const courses = [
  {
    university: "UPB",
    courses: [
      {
        no: "CS101",
        title: "Introduction to Computer Science",
        description: "Basic concepts of computer science.",
        cost: "10000 FCFA"
      },
      {
        no: "CS102",
        title: "Data Structures and Algorithms",
        description: "Introduction to data structures and algorithms.",
        cost: "15000 FCFA"
      }
    ]
  },
  {
    university: "Another Polytechnic University",
    courses: [
      {
        no: "IT201",
        title: "Database Management Systems",
        description: "Overview of database management systems.",
        cost: "12000 FCFA"
      },
      {
        no: "IT202",
        title: "Web Development",
        description: "Introduction to web development.",
        cost: "13000 FCFA"
      }
    ]
  }
];

export function Tutoriat() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [showModal, setShowModal] = useState(false);

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
              console.log('Tutorial added successfully');
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
    setShowModal(!showModal);
  };

  return (
      <div className="font-sans p-6 bg-gray-100 min-h-screen">
        <Header />
        <div className="max-w-7xl mx-auto">
          <button onClick={toggleModal} className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-md">
            Inscrire à un cours
          </button>
          <h1 className="text-3xl font-bold text-center mb-8">Cours Offerts</h1>
          {courses.map((university) => (
              <div key={university.university} className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{university.university}</h2>
                <ul>
                  {university.courses.map((course) => (
                      <li key={course.no} className="mb-4 p-4 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">{course.title}</h3>
                        <p>{course.description}</p>
                        <p className="font-bold">Coût mensuel: {course.cost}</p>
                      </li>
                  ))}
                </ul>
              </div>
          ))}
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
