
// Kann nicht auf die Value ratingColor Attribute zugreifen die in block.json definiert ist
import data from "../block.json";
console.log(data.attributes.ratingColor);

const attributes = wp.data.select( 'core/block-editor' ).getSelectedBlock().attributes;
console.log(attributes)

const allStars = document.querySelectorAll(".star");
const ratingColor = allStars[0].style.color;
console.log(ratingColor);

allStars.forEach((star, clickedIndex) => {
	star.addEventListener("click", () => {
		allStars.forEach((otherStar, otherIndex) => {
			if (otherIndex <= clickedIndex) {
				otherStar.style.color = ratingColor;
			} else {
				otherStar.style.color = "white";
			}
		});
	});
});
