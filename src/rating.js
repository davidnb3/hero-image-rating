import data from "../block.json";

// Kann nicht auf die Value ratingColor Attribute zugreifen die in block.json definiert ist
console.log(data.attributes.ratingColor);

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
