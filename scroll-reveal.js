//Insitialised the Scroll-Reveal component

ScrollReveal({
	distance: "40px",
	duration: 2000,
});

// Customisation of Scroll Reveal rules for different classes

ScrollReveal().reveal(
	".navbar-header,.lg-display,.artist-container,.welcome-text",
	{
		delay: 200,
		origin: "top",
	}
);
ScrollReveal().reveal(".container,.btn", {
	delay: 200,
	origin: "bottom",
	distance: "60px",
});
ScrollReveal().reveal("#holly", {
	delay: 400,
	origin: "left",
	distance: "70px",
});
ScrollReveal().reveal(".footer-text", {
	delay: 800,
	origin: "bottom",
	distance: "70px",
});
ScrollReveal().reveal("#bolly", {
	delay: 400,
	origin: "right",
	distance: "70px",
});
ScrollReveal().reveal(".footer-links", {
	delay: 500,
	origin: "right",
	distance: "70px",
});
