import "./AboutMe.css";
import { cleanPage } from "../../utils/cleanPage";

export const AboutMe = () => {
	const main = document.querySelector("main");
	cleanPage(main)
	const template = `
	<div class="me_container">
		<div class="imagecontainer">
			<img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg" class="myimg">
		</div>
		<div class="aboutme">
			<h1>About Me</h1>
			<p>The cat (Felis catus), commonly referred to as the domestic cat or house cat, is a small domesticated carnivorous mammal. It is the only domesticated species of the family Felidae. Recent advances in archaeology and genetics have shown that the domestication of the cat occurred in the Near East around 7500 BC. It is commonly kept as a house pet and farm cat, but also ranges freely as a feral cat avoiding human contact. It is valued by humans for companionship and its ability to kill vermin. Its retractable claws are adapted to killing small prey like mice and rats. It has a strong, flexible body, quick reflexes, sharp teeth, and its night vision and sense of smell are well developed. It is a social species, but a solitary hunter and a crepuscular predator. Cat communication includes vocalizations like meowing, purring, trilling, hissing, growling, and grunting as well as cat body language. It can hear sounds too faint or too high in frequency for human ears, such as those made by small mammals. It secretes and perceives pheromones.</p>
		</div>
	</div>
	`
	return main.innerHTML = template;
};

