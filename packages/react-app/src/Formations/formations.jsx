import React from "react";
import { Link } from "react-router-dom";
import s from "./style.module.css";
import { Header } from "../header";

const courses = [
  {
    id: "data-science",
    title: "Data Science",
    description: "Apprenez les techniques avancées de la science des données, incluant le traitement des données massives, l'analyse prédictive et le machine learning.",
    image: "https://cdn.futura-sciences.com/buildsv6/images/wide1920/9/5/0/950321c11d_50173256_data-science-1.jpg",
    link: "https://www.e-university.site/course/data-science"
  },
  {
    id: "intelligence-artificielle",
    title: "Intelligence Artificielle",
    description: "Explorez les concepts fondamentaux et avancés de l'intelligence artificielle, y compris les réseaux neuronaux, le deep learning et les algorithmes génétiques.",
    image: "https://th.bing.com/th/id/OIP.wx-VAVMGHeK8UdgWYpzecgHaEU?rs=1&pid=ImgDetMain",
    link: "https://www.e-university.site/home/courses?category=certified-ai-developer"
  },
  {
    id: "blockchain-technology",
    title: "Blockchain Technology",
    description: "Découvrez les bases et les applications avancées de la technologie blockchain, ainsi que son impact sur les différents secteurs industriels.",
    image: "https://th.bing.com/th/id/R.e32faa7aeeb4fd4538bd617c18de42c0?rik=%2boRLaUoz0Adn1g&pid=ImgRaw&r=0",
    link: "https://www.e-university.site/course/blockchain-technology"
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Maîtrisez les aspects critiques de la cybersécurité, y compris la gestion des risques, la protection des données, et les stratégies de défense contre les cyberattaques.",
    image: "https://th.bing.com/th/id/R.d59ca1b02076f779c1ab0aa0168d2743?rik=miFuoT%2fMW0vkrg&pid=ImgRaw&r=0",
    link: "https://www.e-university.site/course/cybersecurity"
  },
  {
    id: "audit-informatique",
    title: "Audit Informatique",
    description: "Formez-vous aux méthodes et pratiques d'audit informatique pour assurer la conformité et la sécurité des systèmes d'information.",
    image: "https://th.bing.com/th/id/OIP.bwTfVnS7W1csm0NRHRG4bAHaEi?w=292&h=180&c=7&r=0&o=5&pid=1.7",
    link: "https://www.e-university.site/course/audit-informatique"
  },
  {
    id:"genie-logiciel",
    title: "Genie Logiciel",
    description: "Apprenez les meilleures pratiques de génie logiciel pour concevoir, développer et maintenir des logiciels de haute qualité.",
    image: "https://th.bing.com/th/id/R.c5e39f5587930c952faf07e1756da65a?rik=3n%2fIdWtyWtkIKw&pid=ImgRaw&r=0&sres=1&sresct=1",
    link: "https://www.e-university.site/course/genie-de-logiciel"
  },
  {
    id:"reseaux-informatique",
    title: "Réseaux Informatique",
    description: "Acquérez des compétences en conception, configuration et gestion des réseaux informatiques pour assurer une connectivité optimale.",
    image: "https://th.bing.com/th/id/OIP.W8AUWCRJiSCA4OhbWMZW_QHaFj?pid=ImgDet&w=474&h=355&rs=1",
    link: "https://www.e-university.site/course/reseaux-informatique"
  }
];

export function Formations() {
  return (
    <div className={`p-4 min-h-screen bg-gray-100 ${s.App}`}>
      <Header />
      <h1 className="text-center text-3xl font-bold mb-8">Formations Professionnelles</h1>
      <div className="container mx-auto">
        {courses.map((course, index) => (
          <div key={index} className="mb-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
            <p className="mb-4">{course.description}</p>
            <img src={course.image} alt={course.title} class="mb-4 w-32 h-24 object-cover rounded-md mx-auto" />
            <Link to={`/course/${course.id}`} className="inline-block py-2 px-4 bg-blue-600 text-white rounded-md">
              Voir Détails
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
