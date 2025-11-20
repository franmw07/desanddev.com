import tinino1 from "../assets/tinino/Banner-beisbol.jpg";
import tinino2 from "../assets/tinino/banner-tienda.jpg";
import tinino3 from "../assets/tinino/new-era-9forty.jpg";
import tinino4 from "../assets/tinino/new-era-59fifty.jpg";
import tinino5 from "../assets/tinino/easton.jpg";
import videoSalon from "../assets/salon-chocolate/salon-del-chocolate.mp4";
import videoSalon1 from "../assets/salon-chocolate/ChocoMad.mp4";
import imgVideoSalon from "../assets/salon-chocolate/CapturavideoSalon.png";
import imgVideoSalon1 from "../assets/salon-chocolate/redesPromo.png";
import imgSalon1 from "../assets/salon-chocolate/zCARTEL.jpg";
import imgSalon2 from "../assets/salon-chocolate/Salon-Internacional-del-Chocolate-Madrid-2018-45-300x188-1.jpg";
import pract1 from "../assets/practicas-antiguas/enfrentamiento 24 de abril.jpg";
import pract2 from "../assets/practicas-antiguas/mohamed salah copia.jpg";
import pract3 from "../assets/practicas-antiguas/securityfordog.jpg";
import pract4 from "../assets/practicas-antiguas/sparklecandy.jpg";
import educa1 from "../assets/img/educaReality.jpg";
import educa2 from "../assets/img/figmaAppDolmen.jpg";
import dogsCamp from "../assets/img/dogsCamps.jpg";
import logo1 from "../assets/practicas-antiguas/securityfordog.jpg";
import logo2 from "../assets/practicas-antiguas/sparklecandy.jpg";

export const portfolioItems = [
  {
    id: 1,
    tipo: "imagen",
    imagenes: [tinino1, tinino2, tinino3, tinino4, tinino5],
    thumb: tinino4,
    titulo: {
      es: "Piezas Gráficas — Tinino",
      en: "Graphic Pieces — Tinino",
    },
    descripcion: {
      es: "Diseños tienda Tinino.",
      en: "Tinino store designs.",
    },
  },
  {
    id: 2,
    tipo: "video",
    videos: [
      { src: videoSalon, thumb: imgVideoSalon }, 
      { src: videoSalon1, thumb: imgVideoSalon1 }
    ],
    thumb: imgVideoSalon,
    titulo: {
      es: "Video Promocional — Salón del Chocolate",
      en: "Promotional Video — Chocolate Fair",
    },
    descripcion: {
      es: "Video promocional para TV y redes.",
      en: "Promotional video for TV and social media.",
    },
  },
  {
    id: 3,
    tipo: "imagen",
    imagenes: [imgSalon1, imgSalon2],
    thumb: imgSalon1,
    titulo: {
      es: "Piezas Gráficas — Salón del Chocolate",
      en: "Graphic Pieces — Chocolate Fair",
    },
    descripcion: {
      es: "Diseños para evento: papelería, banners, flyers.",
      en: "Designs for the event: stationery, banners, flyers.",
    },
  },
  {
    id: 4,
    tipo: "imagen",
    imagenes: [educa1],
    thumb: educa1,
    titulo: {
      es: "Diseño web",
      en: "Web Design",
    },
    descripcion: {
      es: "Diseño landing page para Educa Reality",
      en: "Landing page design for Educa Reality",
    },
  },
  {
    id: 5,
    tipo: "imagen",
    imagenes: [educa2],
    thumb: educa2,
    titulo: {
      es: "Diseño app web",
      en: "Web App Design",
    },
    descripcion: {
      es: "Diseño app web visualización de dólmenes con RV",
      en: "Web app design for dolmen visualization with VR",
    },
    links:
      "https://www.figma.com/proto/APQdl9IosfX9zoYr0SIh3f/Untitled?page-id=0%3A1&node-id=1-2&viewport=241%2C48%2C0.25&scaling=scale-down&starting-point-node-id=1%3A2",
  },
  {
    id: 6,
    tipo: "imagen",
    imagenes: [dogsCamp],
    thumb: dogsCamp,
    titulo: {
      es: "Dogs Camps",
      en: "Dogs Camps",
    },
    descripcion: {
      es: "Diseño de imagen y creación de web",
      en: "Image design and website creation",
    },
  },
  {
    id: 7,
    tipo: "imagen",
    imagenes: [logo1, logo2,],
    thumb: logo1,
    titulo: {
      es: "Logos",
      en: "Logos",
    },
    descripcion: {
      es: "Diseño de logos",
      en: "Logo design",
    },
  },
  {
    id: 8,
    tipo: "imagen",
    imagenes: [pract1, pract2, pract3, pract4],
    thumb: pract2,
    titulo: {
      es: "Photoshop e Illustrator",
      en: "Photoshop & Illustrator",
    },
    descripcion: {
      es: "Prácticas en Photoshop.",
      en: "Photoshop practice.",
    },
  },
];

