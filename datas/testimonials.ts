import arnaud from "@/public/testimonials/arnaud.webp";
import placeholder from "@/public/testimonials/dummy-profile-pic-300x300.webp";
import melina from "@/public/testimonials/frip_app.webp";
import margaux from "@/public/testimonials/margaux.webp";
import pierre from "@/public/testimonials/tile.webp";

export const testimonials = [
  {
    body: "J’ai fait appel aux services de David pour la création d’un logiciel et suis plus que satisfaite de son travail. Efficacité, rapidité, professionnalisme et écoute. Je recommande sans hésiter!",
    author: {
      name: "Margaux B.",
      company: "Villa Care",
      image: margaux,
    },
  },
  {
    body: "Un développeur a l’écoute, rapide et qui sait ce qu’il fait. J’ai développé mon site et web app avec lui, et c’était parfait !",
    author: {
      name: "Mélina S.",
      company: "Frip West Indies",
      image: melina,
    },
  },
  {
    body: "Efficacité, professionnalisme, réactivité et gentillesse sont les atouts premiers de David. Nous avons ce que nous souhaitons depuis si longtemps : un site magnifique !. Merci encore David.",
    author: {
      name: "Pierre B.",
      company: "The Tile & Design Shop",
      image: pierre,
    },
  },

  {
    body: "Excellente expérience avec OnePixel pour la création de notre site web ! David est très pros, à l’écoute et réactif. Le résultat est moderne, esthétique et parfaitement adapté à nos besoins. Je recommande vivement !",
    author: {
      name: "Arnaud B.",
      company: "Seabarts",
      image: arnaud,
    },
  },
  {
    body: "Personne très à l'écoute des projets , je ne connais pas l'informatique et il partage sa passion , il sait prendre le temps pour optimiser les demandes ! Je recommande.",
    author: {
      name: "Philippe H.",
      company: "Discover St Barths",
      image: placeholder,
    },
  },
];
