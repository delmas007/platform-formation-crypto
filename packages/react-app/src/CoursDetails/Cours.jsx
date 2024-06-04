// CourseDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import s from "./style.module.css";
import { Header } from "../header";

const courses = [
  {
    id: "data-science",
    title: "Data Science",
    description: `
    La science des données est un domaine passionnant qui combine la statistique, l'analyse mathématique, l'informatique et la visualisation afin d'extraire des connaissances significatives et impacter des coins divers de l'industrie et recherche. Ce cours approfondi sur la science des données est conçu pour fournir aux étudiants une compréhension solide des principes fondamentaux ainsi qu'une exposition aux techniques avancées utilisées dans le traitement des données.`,
    objectifs: `
    Fondamentaux Statistiques et Mathématiques : Construire une base solide en statistiques et en mathématiques qui supporte les techniques d'analyse de données.
    Analyse de Données en Profondeur : Apprendre à manipuler, nettoyer et analyser les données à travers des outils et langages modernes comme Python, R, SQL et Tableau.
    Machine Learning et Apprentissage Automatique : Comprendre et appliquer des algorithmes de machine learning, y compris l'apprentissage supervisé et non supervisé.
    Big Data Technologies : Gagner de l'expérience avec les architectures de big data comme Apache Hadoop et Spark pour gérer des volumes massifs de données.
    Visualisation de Données : Maîtriser les techniques avancées de visualisation pour représenter efficacement les données.`,
    plan: `
    Introduction et Histoire de la Data Science
    Statistiques pour la Data Science
    Programmation Python/R pour Data Science
    Extraction de Données et Nettoyage
    Introduction au Machine Learning
    Deep Learning et Neurones Artificiels
    Technologies de Big Data
    Visualisation Interactive de Données
    Gestion et Sécurité des Données
    Applications de Data Science dans Divers Secteurs`,
    competences: `
    Analytique Avancée : Compétence pour inspecter, nettoyer, transformer et modéliser les données.
    Résolution de Problèmes : Aptitude à utiliser des approches scientifiques et analytiques pour résoudre des problèmes complexes.`,
    image: "https://cdn.futura-sciences.com/buildsv6/images/wide1920/9/5/0/950321c11d_50173256_data-science-1.jpg",
    link: "https://www.e-university.site/course/data-science"
  },
  {
    id: "intelligence-artificielle",
    title: "Intelligence Artificielle",
    description: `
    L'intelligence artificielle (IA) est un champ dynamique qui fusionne l'informatique, la logique mathématique, et le machine learning pour simuler les processus de raisonnement et d'apprentissage humain par des machines. Ce cours exhaustif offre une immersion profonde dans les principes fondamentaux de l'IA, ainsi qu'une exploration des techniques avancées utilisées aujourd'hui dans divers secteurs. L'objectif est de doter les étudiants d'une compréhension robuste et applicable des technologies d'IA et de leur impact potential sur le monde.`,
    objectifs:`
    Théorie et Pratique de l'IA : Acquérir une compréhension solide des bases théoriques de l'IA, y compris les algorithmes et les modèles sous-jacents.
    Développement en IA :Utiliser des langages de programmation comme Python pour développer et implémenter des algorithmes d'IA.
    Machine Learning :Comprendre et appliquer des techniques d'apprentissage supervisé, non supervisé, et par renforcement.
    Vision par Ordinateur et Traitement du Langage Naturel : Expérimenter avec des systèmes IA capables de comprendre et d'interagir avec le monde visuel et linguistique.
    Éthique de l'IA: Engager une réflexion critique sur les implications éthiques des technologies d'intelligence artificielle.`,
    plan:`
    1. Introduction à l'IA : Histoire et évolution de l'intelligence artificielle.
    2. Algorithmes et Modèles de Base : Étude des algorithmes fondamentaux utilisés en IA.
    3. Programmation pour l'IA : Python, TensorFlow, et autres outils essentiels.
    4. Machine Learning : Concepts de base, apprentissage supervisé et non supervisé.
    5. Deep Learning : Réseaux de neurones, apprentissage profond et leurs applications.
    6. Vision par Ordinateur : Techniques et applications de reconnaissance d'image.
    7. Traitement du Langage Naturel (TAL) : Analyse et génération de texte par IA.
    8. Robotique : Utilisation de l'IA dans la création de systèmes autonomes.
    9. IA dans les Affaires : Application de l'IA dans divers secteurs industriels.
    10. Éthique et Impact Social de l'IA : Discussion des défis éthiques et sociaux.`,
    competences:`
    -Compétences Techniques Avancées : Maîtrise des outils et techniques pour développer des solutions basées sur l'IA.
    -Analyse et Modélisation :** Capacité à créer des modèles prédictifs et des algorithmes sophistiqués.
    -Résolution de Problèmes Complexes : Aptitudes à aborder et résoudre des problèmes complexes où l'IA peut offrir des solutions innovantes.
    -Conscience Éthique et Sociale : Sensibilité aux implications éthiques de l'utilisation de l'IA dans la société.
    `,
    image: "https://th.bing.com/th/id/OIP.wx-VAVMGHeK8UdgWYpzecgHaEU?rs=1&pid=ImgDetMain",
    link: "https://www.e-university.site/home/courses?category=certified-ai-developer"
  },
  {
    id: "blockchain-technology",
    title: "Blockchain Technology",
    description: "Découvrez les bases et les applications avancées de la technologie blockchain, ainsi que son impact sur les différents secteurs industriels.",
    objectifs:`
    Comprendre les principes fondamentaux de la technologie Blockchain et son fonctionnement
    Apprendre les différents cas d'utilisation de la Blockchain dans diverses industries (finance, santé, supply chain, etc.)
    Acquérir les compétences techniques nécessaires pour concevoir, développer et déployer des applications Blockchain
    Analyser les avantages, les défis et les implications de la Blockchain en termes de sécurité, de confidentialité, de gouvernance et de réglementation.`,
    plan:`
    1.Introduction à la Blockchain:
      Historique et évolution de la Blockchain
      Concepts clés : blocs, chaîne, consensus, cryptographie, etc.
      Différents types de Blockchain (publique, privée, permissionnée)
    2.Cas d'utilisation de la Blockchain:
      Finance (cryptomonnaies, paiements, transactions)
      Supply chain (traçabilité, gestion des actifs)
      Santé (dossiers médicaux, essais cliniques)
      Identité numérique
      Contrats intelligents
      Votes et élections
    3.Principes techniques de la Blockchain:
      Structures de données Blockchain
      Algorithmes de consensus (Proof of Work, Proof of Stake, etc.)
      Cryptographie et sécurité
      Transactions et smart contracts
    4.Développement d'applications Blockchain:
      Environnements de développement (Ethereum, Hyperledger, etc.)
      Langages de programmation (Solidity, Go, Java, etc.)
      Déploiement et intégration d'applications Blockchain
    5.Défis et perspectives de la Blockchain:
      Évolutivité et passage à l'échelle
      Confidentialité et réglementation
      Gouvernance et interopérabilité
      Considérations éthiques et socio-économiques`,
    competences:`
    Compréhension approfondie des principes et du fonctionnement de la technologie Blockchain
    Capacité à identifier et à analyser les cas d'utilisation pertinents de la Blockchain
    Compétences techniques pour concevoir, développer et déployer des applications Blockchain
    Connaissance des outils, des langages et des environnements de développement Blockchain
    Aptitude à évaluer les avantages, les défis et les implications de la Blockchain
    Réflexion critique sur les aspects éthiques, réglementaires et socio-économiques de la Blockchain
    `,
    image: "https://th.bing.com/th/id/R.e32faa7aeeb4fd4538bd617c18de42c0?rik=%2boRLaUoz0Adn1g&pid=ImgRaw&r=0",
    link: "https://www.e-university.site/home/course/introduction-au-metaverse/1"
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Maîtrisez les aspects critiques de la cybersécurité, y compris la gestion des risques, la protection des données, et les stratégies de défense contre les cyberattaques.",
    objectifs:`
    L'objectif principal de ce cours est de fournir aux participants une compréhension approfondie des principes de la cybersécurité, des meilleures pratiques en matière de protection des systèmes et des données, ainsi que des compétences nécessaires pour gérer efficacement les risques liés à la sécurité informatique. À l'issue de ce cours, les apprenants seront en mesure :
    De comprendre les menaces, les vulnérabilités et les risques dans l'environnement numérique actuel,
    D'acquérir les connaissances fondamentales sur les différentes approches et technologies de cybersécurité,
    D'être en mesure d'identifier, d'évaluer et de mettre en œuvre des mesures de sécurité adaptées pour protéger les systèmes, les réseaux et les données,
    De développer des compétences en matière d'analyse des menaces, de détection des incidents et de réponse aux cyberattaques,
    De comprendre les aspects juridiques, réglementaires et éthiques liés à la cybersécurité,
    D'être en mesure de contribuer à l'élaboration et à la gestion d'un programme de cybersécurité efficace au sein d'une organisation.`,
    plan:`
    1. Principes de la cybersécurité:
      Menaces et vulnérabilités dans le paysage de la cybersécurité
      Confidentialité, intégrité et disponibilité des données
      Modèles de sécurité (CIA, NIST, etc.)
    2. Approches de cybersécurité:
      Sécurité des systèmes et des réseaux
      Sécurité des applications et des données
      Sécurité des terminaux (endpoints)
      Sécurité mobile et sans fil
    3. Technologies de cybersécurité:
      Contrôles d'accès et d'authentification
      Cryptographie et gestion des clés
      Pare-feux et systèmes de détection/prévention des intrusions
      Sécurité des navigateurs web et des courriels
    4. Gestion des risques de cybersécurité:
      Identification et évaluation des risques
      Stratégies de réduction et de mitigation des risques
      Plans de continuité d'activité et de reprise après sinistre
    5. Analyse des menaces et réponse aux incidents:
      Surveillance et détection des incidents de sécurité
      Procédures d'intervention et de gestion des incidents
      Forensique numérique et enquêtes
    6. Aspects légaux, réglementaires et éthiques:
      Lois et réglementations en matière de cybersécurité
      Protection des données et confidentialité
      Considérations éthiques liées à la cybersécurité
    7. Gestion d'un programme de cybersécurité:
      Élaboration d'une stratégie de cybersécurité
      Rôles et responsabilités dans la cybersécurité
      Formation et sensibilisation du personnel`,
    competences:`
    Compréhension approfondie des principes et des technologies de cybersécurité,
    Capacité à évaluer les risques de sécurité et à mettre en place des mesures de protection adaptées,
    Compétences en matière d'analyse des menaces, de détection et de réponse aux incidents de sécurité,
    Connaissance des aspects légaux, réglementaires et éthiques liés à la cybersécurité,
    Aptitude à contribuer à l'élaboration et à la gestion d'un programme de cybersécurité efficace.
    `,
    image: "https://th.bing.com/th/id/R.d59ca1b02076f779c1ab0aa0168d2743?rik=miFuoT%2fMW0vkrg&pid=ImgRaw&r=0",
    link: "https://www.e-university.site/course/cybersecurity"
  },
  {
    id: "audit-informatique",
    title: "  ",
    description: "Formez-vous aux méthodes et pratiques d'audit informatique pour assurer la conformité et la sécurité des systèmes d'information.",
    objectifs:`
    L'objectif principal de ce cours est de fournir aux participants une compréhension approfondie des principes, des pratiques et des techniques d'audit informatique. À l'issue de ce cours, les apprenants seront en mesure :
    De comprendre le rôle, les objectifs et les normes de l'audit informatique.
    D'acquérir les connaissances nécessaires sur les différents domaines d'audit informatique.
    D'être en mesure de planifier, d'exécuter et de communiquer les résultats d'un audit informatique.
    De développer des compétences en matière d'évaluation des contrôles informatiques et d'identification des risques.
    De comprendre les aspects légaux, réglementaires et éthiques liés à l'audit informatique.
    D'être en mesure de contribuer à l'amélioration continue des processus et des contrôles informatiques au sein d'une organisation.`,
    plan:`
    1. Introduction à l'audit informatique
      Définition et objectifs de l'audit informatique
      Rôle de l'audit informatique dans l'entreprise
      Normes et cadres de référence (ISACA, COBIT, etc.)
    2. Domaines d'audit informatique
      Audit des systèmes d'information
      Audit des infrastructures et des réseaux
      Audit de la sécurité des systèmes
      Audit des applications et des processus métier
    3. Planification et préparation de l'audit
      Analyse des risques et évaluation des contrôles
      Élaboration du plan d'audit
      Collecte et analyse des informations
    4. Techniques d'audit informatique
      Entretiens et questionnaires
      Revues documentaires et observations
      Tests de contrôle et analyse des données
      Utilisation d'outils d'audit spécialisés
    5. Exécution de l'audit
      Mise en œuvre du plan d'audit
      Collecte et évaluation des preuves
      Identification des problèmes et des faiblesses
    6. Rapport d'audit et suivi des actions
      Rédaction du rapport d'audit
      Communication des résultats et des recommandations
      Suivi de la mise en œuvre des actions correctives
    7. Aspects légaux, réglementaires et éthiques
      Cadre juridique et réglementaire de l'audit informatique
      Confidentialité, intégrité et disponibilité des informations
      Considérations éthiques dans l'audit informatique`,
    competences:`
    Compréhension approfondie des principes et des pratiques de l'audit informatique
    Capacité à planifier, à exécuter et à communiquer les résultats d'un audit informatique
    Compétences en matière d'évaluation des contrôles informatiques et d'identification des risques
    Connaissance des aspects légaux, réglementaires et éthiques liés à l'audit informatique
    Aptitude à contribuer à l'amélioration continue des processus et des contrôles informatiques
    `,
    image: "https://th.bing.com/th/id/OIP.bwTfVnS7W1csm0NRHRG4bAHaEi?w=292&h=180&c=7&r=0&o=5&pid=1.7",
    link: "https://www.e-university.site/course/audit-informatique"
  },
  {
    id:"genie-logiciel",
    title: "Genie Logiciel",
    description: "Apprenez les meilleures pratiques de génie logiciel pour concevoir, développer et maintenir des logiciels de haute qualité.",
    objectifs:`
    L'objectif principal de ce cours est de fournir aux participants une compréhension approfondie des principes, des méthodes et des outils du génie logiciel. À l'issue de ce cours, les apprenants seront en mesure :

    De comprendre les fondements et l'importance du génie logiciel dans le développement de systèmes informatiques.
    D'acquérir les connaissances sur les différentes phases du cycle de vie du logiciel.
    De maîtriser les principales méthodes et pratiques de développement de logiciels.
    D'être en mesure d'utiliser efficacement les outils de génie logiciel pour la gestion de projets, la conception, le codage et le test.
    De développer des compétences en analyse des exigences, de conception et d'architecture logicielle.
    De comprendre les aspects qualité, maintenance et évolution des systèmes logiciels.`,
    plan:`
    Introduction au génie logiciel
    Définition et importance du génie logiciel
    Évolution historique et tendances actuelles
    Rôle du génie logiciel dans le développement de systèmes
    Cycle de vie du logiciel
    Modèles de développement (cycle en cascade, itératif, agile, etc.)
    Phases du cycle de vie (analyse, conception, implémentation, test, déploiement, maintenance)
    Gestion de projets logiciels
    Analyse des exigences
    Techniques de collecte et d'analyse des exigences
    Spécification des exigences fonctionnelles et non fonctionnelles
    Validation et gestion des exigences
    Conception et architecture logicielle
    Principes de conception (modularité, abstraction, encapsulation, etc.)
    Modèles et patterns de conception
    Architecture logicielle (couches, microservices, orientée-objet, etc.)
    Outils de modélisation (UML, diagrammes, etc.)
    Développement et implémentation
    Langages de programmation et paradigmes de programmation
    Techniques de programmation (programmation structurée, orientée-objet, fonctionnelle, etc.)
    Gestion de la configuration et du code source
    Tests et assurance qualité
    Stratégies de test (unitaire, d'intégration, système, acceptance)
    Techniques de test (boîte blanche, boîte noire, test automatisé, etc.)
    Métriques de qualité et d'assurance qualité
    Maintenance et évolution des logiciels
    Défauts et erreurs dans les systèmes logiciels
    Techniques de maintenance (corrective, adaptative, perfective, préventive)
    Réingénierie et refactorisation
    Outils et environnements de développement
    Outils de gestion de projet (planification, suivi, collaboration)
    Environnements de développement intégrés (IDE)
    Outils d'automatisation (build, déploiement, intégration continue)`,
    competences:`
    Compréhension approfondie des principes et des pratiques du génie logiciel
    Capacité à analyser les exigences, à concevoir et à architecturer des systèmes logiciels
    Maîtrise des techniques de développement, de test et de maintenance des logiciels
    Aptitude à utiliser les outils de génie logiciel pour la gestion de projets et le développement collaboratif
    Connaissance des tendances et des bonnes pratiques dans le domaine du génie logiciel
    `,
    image: "https://th.bing.com/th/id/R.c5e39f5587930c952faf07e1756da65a?rik=3n%2fIdWtyWtkIKw&pid=ImgRaw&r=0&sres=1&sresct=1",
    link: "https://www.e-university.site/course/genie-de-logiciel"
  },
  {
    id:"reseaux-informatique",
    title: "Réseaux Informatique",
    description: "Acquérez des compétences en conception, configuration et gestion des réseaux informatiques pour assurer une connectivité optimale.",
    objectifs:`
    L'objectif principal de ce cours est de fournir aux participants une compréhension approfondie des principes, des technologies et des techniques de déploiement des réseaux informatiques. À l'issue de ce cours, les apprenants seront en mesure :

    De comprendre les fondements et l'importance des réseaux informatiques dans les systèmes de communication modernes.
    D'acquérir les connaissances sur les différents modèles et architectures de réseaux.
    De maîtriser les technologies de mise en réseau, notamment les protocoles, les équipements et les services réseau.
    D'être en mesure de concevoir, de configurer et de déployer des réseaux informatiques efficaces.
    De développer des compétences en gestion, en administration et en sécurisation des réseaux.
    De comprendre les tendances et les évolutions futures dans le domaine des réseaux informatiques.`,
    plan:`
    Introduction aux réseaux informatiques
    Définition et importance des réseaux informatiques
    Évolution historique et tendances actuelles
    Types de réseaux (LAN, WAN, MAN, WLAN, etc.)
    Modèles et architectures de réseaux
    Modèle OSI (couches physique, liaison, réseau, transport, session, présentation, application)
    Modèle TCP/IP (couches physique, liaison, internet, transport, application)
    Topologies de réseaux (bus, étoile, anneau, maillée)
    Technologies de mise en réseau
    Médias de transmission (câbles, fibres optiques, ondes radio)
    Équipements réseaux (commutateurs, routeurs, points d'accès, modems, etc.)
    Protocoles de communication (Ethernet, Wi-Fi, TCP, UDP, IP, etc.)
    Conception et déploiement de réseaux
    Analyse des besoins et définition des exigences
    Choix des technologies et des équipements
    Planification de l'infrastructure réseau
    Déploiement, configuration et test des réseaux
    Adressage IP et routage
    Adressage IPv4 et IPv6
    Mécanismes de routage (statique, dynamique, protocoles de routage)
    Gestion des sous-réseaux et de la NAT
    Services et applications réseau
    Serveurs et services réseau (DNS, DHCP, web, e-mail, partage de fichiers, etc.)
    Applications client-serveur et pair-à-pair
    Intégration des services réseau
    Gestion et administration des réseaux
    Outils de surveillance et de diagnostic
    Techniques de dépannage et de résolution de problèmes
    Sauvegarde, restauration et gestion de la configuration
    Sécurité des réseaux
    Menaces et vulnérabilités des réseaux
    Mécanismes de sécurité (pare-feux, VPN, IDS/IPS, cryptographie)
    Politiques de sécurité et bonnes pratiques`,
    competences:`
    Compréhension approfondie des principes et des technologies des réseaux informatiques
    Capacité à concevoir, à déployer et à administrer des infrastructures réseau
    Maîtrise des techniques de configuration, de gestion et de dépannage des réseaux
    Aptitude à assurer la sécurité des réseaux et à mettre en place des mesures de protection
    Connaissance des tendances et des évolutions futures dans le domaine des réseaux
    `,
    image: "https://th.bing.com/th/id/OIP.W8AUWCRJiSCA4OhbWMZW_QHaFj?pid=ImgDet&w=474&h=355&rs=1",
    link: "https://www.e-university.site/home/course/administration-reseaux-avancee/12"
  }
];

export function CourseDetail() {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return <p>Course not found!</p>;
  }

  return (
    <div className={`p-4 min-h-screen bg-gray-100 ${s.App}`}>
      <Header />
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
        <img src={course.image} alt={course.title} className=" mb-4 w-full h-64 object-cover rounded-md" />
        <p className="mb-4"><strong>Description Complète</strong> <br/>{course.description}</p>
        <p className="mb-4"><strong>Objectifs</strong> <br/>{course.objectifs}</p>
        <p className="mb-4"><strong>Plan</strong> <br/>{course.plan}</p>
        <p className="mb-4"><strong>Compétences</strong> <br/>{course.competences}</p>
        <a href={course.link} target="_blank" rel="noopener noreferrer" className="inline-block py-2 px-4 bg-blue-600 text-white rounded-md">
          Inscription
        </a>
        <br />
        <Link to="/formations" className="inline-block mt-4 text-blue-500">Retour aux formations</Link>
      </div>
    </div>
  );
}
