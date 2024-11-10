import margaux from "@/public/testimonials/margaux.webp"
import placeholder from "@/public/testimonials/dummy-profile-pic-300x300.png"
import pierre from "@/public/testimonials/tile.png"
import arnaud from "@/public/testimonials/arnaud.png"

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
		body: "Efficacité, professionnalisme, réactivité et gentillesse sont les atouts premiers de David. Nous avons ce que nous souhaitons depuis si longtemps : un site magnifique !. Merci encore David.",
		author: {
			name: "Pierre B.",
			company: "The Tile & Design Shop",
			image: pierre,
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

	{
		body: "Excellente expérience avec OnePixel pour la création de notre site web ! David est très pros, à l’écoute et réactif. Le résultat est moderne, esthétique et parfaitement adapté à nos besoins. Je recommande vivement !",
		author: {
			name: "Arnaud B.",
			company: "Seabarts",
			image: arnaud,
		},
	},
]
