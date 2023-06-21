window.HELP_IMPROVE_VIDEOJS = !1;

var showDropdown = function (e) {
	e.currentTarget.classList.add("hero-nav__item--show-dropdown");
},
	hideDropdown = function (e) {
		e.currentTarget.classList.remove("hero-nav__item--show-dropdown");
	},
	toggleDropdown = function (e) {
		e.currentTarget.classList.toggle("hero-nav__item--show-dropdown");
	};

function setupDropdowns(n) {
	document
		.querySelectorAll(".hero-nav__item--with-dropdown")
		.forEach(function (e) {
			var o, t;
			n.matches
				? (((o = e.classList).contains("hero-nav__item--dropdown-left") &&
					o.contains("hero-nav__item--dropdown-right")) ||
					((t = e.getBoundingClientRect().width),
						(e.querySelector(".dropdown").style.transform =
							"translateX(calc(-50% + " + t / 2 + "px))")),
					e.addEventListener("mouseenter", showDropdown),
					e.addEventListener("mouseleave", hideDropdown),
					e
						.querySelector(".hero-nav__link")
						.removeEventListener("click", toggleDropdown))
				: (e.removeEventListener("mouseenter", showDropdown),
					e.removeEventListener("mouseleave", hideDropdown),
					(e.querySelector(".dropdown").style.transform = ""),
					e.addEventListener("click", toggleDropdown));
		});
}
var mediaQuery = window.matchMedia("(min-width: 992px)");
setupDropdowns(mediaQuery),
	mediaQuery.addListener(function (e) {
		var o;
		setupDropdowns(e),
			e.matches &&
			(((o = document.querySelector("#hero-menu")).style.height = ""),
				bodyScrollLock.unlock(o));
	});
var heroMenu = document.querySelector("#hero-menu");

function closeMenuAndGoTo(o) {
	document.querySelector("#hero-menu").classList.toggle("ft-menu--js-show");
	var e = document.querySelector("#hero-menu");
	if (
		((e.style.height = ""),
			bodyScrollLock.unlock(e),
			"#" === o || !document.querySelector(o))
	)
		return !1;
	setTimeout(function () {
		var e = document.querySelector(o);
		window.scrollTo({
			top: e.getBoundingClientRect().top,
			behavior: "smooth",
		});
	}, 250);
}
(document.querySelector("[close-nav-menu]").onclick = function (e) {
	heroMenu.classList.toggle("ft-menu--js-show"),
		bodyScrollLock.unlock(heroMenu);
}),
	(document.querySelector("[open-nav-menu]").onclick = function (e) {
		heroMenu.classList.toggle("ft-menu--js-show"),
			(heroMenu.style.height = window.innerHeight + "px"),
			bodyScrollLock.lock(heroMenu);
	}),
	document
		.querySelector("#hero-menu")
		.querySelectorAll("[href*='#']")
		.forEach(function (o) {
			o.onclick = function (e) {
				e.preventDefault(), closeMenuAndGoTo(o.getAttribute("href"));
			};
		});
var nav = document.querySelector(".hero-nav");
window.onscroll = function (e) {
	var o = document.querySelector("[change-src-onscroll]");
	window.scrollY > nav.getBoundingClientRect().height
		? (nav.classList.contains("hero-nav--is-sticky") ||
			((window.logoSrc = o.getAttribute("src")),
				o.setAttribute("src", o.getAttribute("change-src-onscroll")),
				o.setAttribute("change-src-onscroll", logoSrc)),
			nav.classList.add("hero-nav--is-sticky"))
		: 0 === window.scrollY &&
		(nav.classList.contains("hero-nav--is-sticky") &&
			((window.logoSrc = o.getAttribute("src")),
				o.setAttribute("src", o.getAttribute("change-src-onscroll")),
				o.setAttribute("change-src-onscroll", logoSrc)),
			nav.classList.remove("hero-nav--is-sticky"));
};
var languageDropdown = document.querySelector("[javascript-language-selector]");
languageDropdown.onclick = function (e) {
	e.target.classList.contains("dropdown__link") &&
		(languageDropdown
			.querySelector(".dropdown__link--selected")
			.classList.remove("dropdown__link--selected"),
			e.target.classList.add("dropdown__link--selected"),
			document
				.querySelector(".language-image")
				.setAttribute("src", e.target.querySelector("img").getAttribute("src")));
};

function submitForm(t) {
	t.preventDefault();
	var n = t.target.querySelector("button");
	if (n.classList.contains("btn--loading")) return !1;
	n.classList.add("btn--loading");
	try {
		setTimeout(function () {
			n.classList.remove("btn--loading");
		}, 2e3);
	} catch (t) {
		console.log(t), n.classList.remove("btn--loading");
	}
}

// SCROLL

document.addEventListener("DOMContentLoaded", function () {
	window.addEventListener("scroll", function () {
		var scrollIcon = document.querySelector(".scroll-icon");
		if (window.pageYOffset > 100) {
			scrollIcon.classList.add("show");
		} else {
			scrollIcon.classList.remove("show");
		}
	});
});

// Smooth scroll to the target section
document.querySelector('a[href="#section"]').addEventListener('click', function (e) {
	e.preventDefault(); // Prevent default link behavior
	document.querySelector(this.getAttribute('href')).scrollIntoView({
		behavior: 'smooth'
	});
});
