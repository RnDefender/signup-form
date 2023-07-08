// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
import { gsap } from "gsap";

const formFields = gsap.utils.toArray(".form-signup__field");
const formTimeline = gsap.timeline();

// Анимация для элементов формы
formFields.forEach(function (field, index) {
	const isLastField = index === formFields.length - 1; // Проверка, является ли текущий элемент последним
	formTimeline.from(field, {
		opacity: 0,
		y: 100,
		duration: 0.8,
		ease: "expo.out",
		delay: index * -0.1,
		onComplete: function () {
			field.style.transform = "none";
		}
	});
});


// Анимация для SVG
const vivus = new Vivus("my-svg", { type: 'oneByOne', duration: 500, start: 'inViewport' });
vivus.play();

gsap.to("#my-svg-path", {
	stroke: "#fff",
	duration: 2.5,
	ease: "expo.in",
})