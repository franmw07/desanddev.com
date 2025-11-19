import tinino1 from "../assets/tinino/Banner-beisbol.jpg";
import tinino2 from "../assets/tinino/banner-tienda.jpg";
import tinino3 from "../assets/tinino/new-era-9forty.jpg";
import tinino4 from "../assets/tinino/new-era-59fifty.jpg";
import tinino5 from "../assets/tinino/easton.jpg";
import videoSalon from "../assets/salon-chocolate/salon-del-chocolate.mp4";
import imgVideoSalon from "../assets/salon-chocolate/CapturavideoSalon.png";
import imgSalon1 from "../assets/salon-chocolate/zCARTEL.jpg";
import imgSalon2 from "../assets/salon-chocolate/Salon-Internacional-del-Chocolate-Madrid-2018-45-300x188-1.jpg";
import pract1 from "../assets/practicas-antiguas/enfrentamiento 24 de abril.jpg";
import pract2 from "../assets/practicas-antiguas/mohamed salah copia.jpg";
import pract3 from "../assets/practicas-antiguas/flyer clinic therapy copia.pdf";
import pract4 from "../assets/practicas-antiguas/tarjeta de presentacion clinic therapy copia.pdf";

export const portfolioItems = [
  {
    id: 1,
    titulo: "Piezas Gráficas — Tinino",
    tipo: "imagen",
    imagenes: [
      tinino1,
      tinino2,
      tinino3,
      tinino4,
      tinino5,
    ],
    thumb: tinino4,
    descripcion: "Diseños tienda Tinino.",
  },
  {
    id: 2,
    titulo: "Video Promocional — Salón del Chocolate",
    tipo: "video",
    src: videoSalon,
    thumb: imgVideoSalon,
    descripcion: "Video promocional para TV y redes.",
  },
  {
    id: 3,
    titulo: "Piezas Gráficas — Salon del chocolate",
    tipo: "imagen",
    imagenes: [
      imgSalon1,
      imgSalon2,
    ],
    thumb: imgSalon1,
    descripcion: "Diseños para evento papeleria, banners, flyers.",
  },
  {
    id: 4,
    titulo: "Photoshop e illustrator",
    tipo: "imagen",
    imagenes: [
      pract1,
      pract2,
      pract3,
      pract4,
    ],
    thumb: pract2,
    descripcion: "Practicas en photoshop.",
  },
];
