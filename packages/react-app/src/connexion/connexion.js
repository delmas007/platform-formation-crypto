import React from "react";
import s from "./style.module.css";
import { Link } from "react-router-dom";
import { Header } from "../header";
import {useForm} from "react-hook-form";
import {utilisateurApi} from "../Api/ApiUtilisateur";

export function Connexion() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        utilisateurApi().connexionUtilisateur(data.username, data.password).then(
            (resp) => {
                localStorage.setItem('token', resp.data.accessToken);
                console.log(resp);
            }
        ).catch((err) => {  console.log(err); }
        )
    };

    return (
        <div className={`p-4 min-h-screen bg-gray-100 ${s.App}`}>
            <Header />
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-center text-xl font-bold mb-4">Connectez-vous</h2>

                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">USERNAME</label>
                    <input
                        type="text"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        id="username"
                        {...register('username', { required: 'Le nom d\'utilisateur est requis' })}
                    />
                    {errors.username && <span className="text-red-500 text-sm">{errors.username.message}</span>}
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">MOT DE PASSE</label>
                    <input
                        type="password"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        id="password"
                        {...register('password', { required: 'Le mot de passe est requis' })}
                    />
                    {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                </div>

                <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md">
                    Connexion
                </button>
            </form>
            <div className="text-center mt-4">
                <Link to='/inscription' className="text-blue-500">
                    Vous n'avez pas de compte? Inscrivez-vous
                </Link>
            </div>
        </div>
    );
}
