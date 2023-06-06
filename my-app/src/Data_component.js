const cv = [
    {
        id:1,
        company:"Deltares",
        location:"Delft, Nederland",
        start_date:"2018",
        end_date:"2019",
        contract:"Internship",
        position:"Assistant researcher",
        description:"Optimization of the servoing of an amphibious robot dedicated to inspect sewer network. The goal was to code some algorithm using C, an Arduino to make sure that the robot would follow his path in a pipe. Used some accelerometers.",
        tools:"C Language",
        skills:"Coding"
    },
    {
        id:2,
        company:"Eau de Paris",
        location:"Paris, France",
        start_date:"2019",
        end_date:"2020",
        contract:"Internship",
        position:"Assistant Engineer",
        description:"Optimization of pressure management of Parisian Water Network to reduce real water losses. Creation of a district meter area of 50 km with optimization of pressure using membrane valve.",
        tools:"R Language, EPANET, Power BI, VBA, Microsoft Office Tools",
        skills:"Project management, Urban Hydraulics, Advanced Modelling,Coding"
    },
    {
        id:3,
        company:"Eau de Paris",
        location:"Paris, France",
        start_date:"2020",
        end_date:"PRESENT",
        contract:"Permanent contract",
        position:"Engineer",
        description:"Optimization of network performance. Management of projects to reduce non revenue water. The main projets were : 1. Adding 23 more districts meters area. 2. Deploy 3000 acoustics sensors to prelocalize leaks.",
        tools:"R Language, EPANET, Power BI, VBA, Microsoft Office Tools",
        skills:"Project management, Urban Hydraulics, Advanced Modelling,Coding"
    }
]

const education=[
    {
        id:0,
        company:"François 1er International High School",
        location:"Fontainebleau, Seine-et-Marne",
        date:"2014-2016",
        contract:"Higher school preparatory classes",
        description:"The classes préparatoires aux grandes écoles (CPGE), commonly called classes prépas or prépas, are a two-year curriculum extensible to three-years, acting as a prep course with the main goal of training undergraduate students for enrollment in one of the grandes écoles. The grandes écoles of France are higher education establishments aside the mainstream framework of the public universities",
        skills:"",
        web:"https://lyceefrancois1.net/"
    },
    {
        id:1,
        company:"ENGEES",
        location:"Strasbourg, France",
        date:"2016-2019",
        contract:"Master Degree - Water Engineering",
        description: "ENGEES is a public engineering school in the fields of water, waste and sustainable land development.  Choose Urban hydraulics specialization ",
        tools:"Canoe, Porteau, Ansys 3D, Microsoft Tools",
        skills:"",
        web:"https://engees.unistra.fr/"
    },
    {
        id:2,
        company:"Code Academy",
        location:"Web",
        date:"2021-2022",
        contract:"Certification - Full-stack-dev",
        description:"I've been coding for fun, using all the ressources on the internet",
        tools:"Visual Studio,GitHub",
        skills:"HTML,CSS,Javascript,React,Tailwinds, Bootstrap, Typescript, Python, R Language",
        web:"https://www.codecademy.com/"
    }
]


const article = [
    {
        id:2,
        title:"Eau de Paris brings its expertise to improve access to water in Jericho",
        company:"Eau de Paris",
        resume:"Eau de Paris was in Jericho on the West Bank to launch a technical support project aimed at improving access to water. The project involves the implementation of a real-time supervision system, as well as tools to reduce water losses in the Jericho network.",
        date_publication:"24/10/2022",
        img:"./img/Jericho.jpg",
        web:"https://www.eaudeparis.fr/actualit%C3%A9s/eau-de-paris-apporte-son-expertise-pour-ameliorer-lacces-leau-jericho",
        author:"Eau de Paris"
    },
    {
        id:1,
        title:"Innovation: robots to combat urban water leakage",
        company:"FRANCE 2",
        resume:"Every year, 20% of France's water escapes from its pipes. It can be time-consuming and complicated to find the leak, but technology is helping more and more to find the little holes in the big pipes.",
        date_publication:"06/01/2023",
        img:"./img/capteurs_acoustique.jpg",
        web:"https://www.francetvinfo.fr/replay-jt/france-2/20-heures/innovation-ces-robots-qui-luttent-contre-les-fuites-d-eau-en-ville_5585760.html",
        author:"J.Lonchampt"
    },
    {
        id:4,
        title:"[L'instant tech] Eau de Paris hunts leaks with sound sensors",
        company:"Usine Nouvelle",
        resume:"Digitization, sectorization and installation of 3,000 sound sensors. Eau de Paris invests in cutting-edge technologies to reduce network leakage and guarantee an efficiency rate of 92%, one of the best in France.",
        date_publication:"24/03/2022",
        img:"./img/Olivier_cognasse.jpg",
        web:"https://www.usinenouvelle.com/editorial/l-instant-tech-eau-de-paris-chasse-les-fuites-avec-des-capteurs-sonores.N1798417",
        author:"Olivier Cognasse"
    },
    {
        id:3,
        title:"Water networks: the hunt is on for wasteful consumption",
        company:"Le Moniteur",
        resume:"Water networks: the hunt is on for wasteful consumption",
        date_publication:"29/09/2022",
        img:"./img/Moniteur.jpg",
        web:"https://www.lemoniteur.fr/article/reseaux-d-eau-la-chasse-au-gaspi-est-ouverte.2225852",
        author:"Anna Rousseau"
    }
]


export {
    education,cv,article
}