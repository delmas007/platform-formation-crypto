import React from "react";
import { Link } from "react-router-dom";
import s from "./style.module.css";
import { Header } from "../header";

export function Inscription() {
  return (
    <div className={`p-4 min-h-screen bg-gray-100 ${s.App}`}>
      <Header />
      <h3 className="text-center text-xl font-bold mb-4">INSCRIVEZ-VOUS:</h3>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full sm:w-1/2 p-2">
            <label htmlFor="nom" className="block text-sm font-medium text-gray-700">NOM:</label>
            <input
              type="text"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              name="nom"
              id="nom"
              required
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
            />
          </div>
          <div className="w-full sm:w-1/2 p-2">
            <label htmlFor="datenaissance" className="block text-sm font-medium text-gray-700">DATE DE NAISSANCE:</label>
            <input
              type="date"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              name="datenaissance"
              id="datenaissance"
              required
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
            />
          </div>
          <div className="w-full sm:w-1/2 p-2">
            <label htmlFor="cni" className="block text-sm font-medium text-gray-700">CNI:</label>
            <input
              type="text"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              name="cni"
              id="cni"
              required
            />
          </div>
          <div className="w-full p-2">
            <label htmlFor="photo" className="block text-sm font-medium text-gray-700">PHOTO:</label>
            <input
              type="file"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              name="photo"
              id="photo"
              accept="image/*"
              required
            />
          </div>
        </div>
        <button type="submit" className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-md w-full">
          INSCRIPTION
        </button><br/>
        <Link to="/connexion" className="text-blue-500 mt-2 inline-block text-center w-full">
          Vous avez déjà un compte? Connectez-vous
        </Link>
      </form>
    </div>
  );
}

function handleSubmit(event) {
  event.preventDefault();
  // Handle form submission here
}
