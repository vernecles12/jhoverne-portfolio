const skillGroups = [
	{
		number: "01",
		title: "Web development",
		description: "Core front-end technologies for building and styling web experiences.",
		tags: ["HTML", "CSS", "JavaScript"],
		symbol: "{ }",
	},
	{
		number: "02",
		title: "Programming & databases",
		description: "Foundational programming, data handling, and database skills.",
		tags: ["PHP", "MySQL", "Python", "Database Management"],
		symbol: "01",
	},
	{
		number: "03",
		title: "UI / UX design",
		description: "Designing interface ideas and creating interactive prototypes.",
		tags: ["Figma", "UI Design", "Prototyping"],
		symbol: "✳",
	},
	{
		number: "04",
		title: "Computer & productivity tools",
		description: "Everyday technical support and productivity applications.",
		tags: ["Basic Troubleshooting", "Word", "Excel", "PowerPoint"],
		symbol: "⌘",
	},
];

const strengths = [
	"Willingness to learn",
	"Time management",
	"Communication skills",
	"Teamwork and collaboration",
	"Problem-solving",
	"Adaptability",
	"Responsible and hardworking",
];

const navItems = [
	{ label: "About", href: "#about" },
	{ label: "Skills", href: "#skills" },
	{ label: "UI Designs", href: "#designs" },
	{ label: "Selected Works", href: "#selected-works" },
	{ label: "Education", href: "#education" },
	{ label: "Contact", href: "#contact" },
];

function ArrowUpRight() {
	return (
		<svg aria-hidden="true" viewBox="0 0 20 20" className="arrow-icon">
			<path d="M5 15 15 5M6 5h9v9" />
		</svg>
	);
}

function DownloadIcon() {
	return (
		<svg aria-hidden="true" viewBox="0 0 20 20" className="button-icon">
			<path d="M10 2.75v9.5m-3.5-3.5 3.5 3.5 3.5-3.5M4 14.25v2.5h12v-2.5" />
		</svg>
	);
}

export default function Home() {
	return (
		<main>
			<header className="site-header">
				<a className="brand" href="#home" aria-label="Jhoverne Morcilla home">
					<span className="brand-mark">JM</span>
					<span className="brand-name">Jhoverne Morcilla</span>
				</a>

				<nav className="desktop-nav" aria-label="Main navigation">
					{navItems.map((item) => (
						<a key={item.href} href={item.href}>
							{item.label}
						</a>
					))}
				</nav>

				<a className="header-cta" href="mailto:vhaniemorcilla4785@gmail.com">
					Let&apos;s talk <ArrowUpRight />
				</a>

				<details className="mobile-menu">
					<summary aria-label="Open navigation menu">
						<span />
						<span />
					</summary>
					<nav aria-label="Mobile navigation">
						{navItems.map((item) => (
							<a key={item.href} href={item.href}>
								{item.label}
							</a>
						))}
						<a href="mailto:vhaniemorcilla4785@gmail.com">Let&apos;s talk</a>
					</nav>
				</details>
			</header>

			<section className="hero" id="home">
				<div className="hero-grid" aria-hidden="true" />
				<div className="hero-content">
					<div className="availability">
						<span className="status-dot" /> OPEN TO OJT OPPORTUNITIES
					</div>
					<p className="hero-kicker">BS INFORMATION TECHNOLOGY STUDENT</p>
					<h1>
						Hello, I&apos;m
						<span>Jhoverne</span>
						<span className="name-line">
							Morcilla<span className="period">.</span>
						</span>
					</h1>
					<p className="hero-description">
						An aspiring IT professional ready to turn classroom knowledge into
						practical experience through an On-the-Job Training opportunity.
					</p>
					<div className="hero-actions">
						<a className="button button-primary" href="#contact">
							Get in touch <ArrowUpRight />
						</a>
							<a className="button button-secondary" href="/resume.pdf" target="_blank" rel="noreferrer">
								View résumé <ArrowUpRight />
							</a>
							<a
								className="button button-secondary"
								href="/resume.pdf"
								download="Jhoverne-Morcilla-Resume.pdf"
							>
								<DownloadIcon /> Download résumé
							</a>
					</div>
					<div className="hero-meta">
						<span>
							<span className="meta-label">BASED IN</span> Cavite, Philippines
						</span>
						<span className="meta-divider" />
						<span>
							<span className="meta-label">FOCUS</span> Web &amp; IT
						</span>
					</div>
				</div>

				<div className="hero-art" aria-label="Decorative initials JM and technology-themed graphic">
					<div className="orbit orbit-one" />
					<div className="orbit orbit-two" />
					<div className="orbit orbit-three" />
					<div className="art-cross cross-one">✳</div>
					<div className="art-cross cross-two">+</div>
					<div className="art-card">
						<div className="art-card-top">
							<span>PERSONAL PORTFOLIO</span>
							<span>2026</span>
						</div>
						<img
							className="portrait"
							src="/profile.jpg?v=20261124"
							width="330"
							height="275"
							loading="eager"
							fetchPriority="high"
							draggable="false"
							alt="Jhoverne Morcilla"
						/>
						<div className="art-card-bottom">
							<span>IT STUDENT</span>
							<span>LEARN • BUILD • GROW ↗</span>
						</div>
					</div>
					<div className="floating-chip chip-one">&lt;code /&gt;</div>
					<div className="floating-chip chip-two">UI · UX</div>
					<div className="art-caption">LEARN&nbsp; / &nbsp;BUILD&nbsp; / &nbsp;GROW</div>
				</div>
				<a className="scroll-cue" href="#about">
					<span /> SCROLL TO EXPLORE
				</a>
			</section>

			<section className="intro section-wrap" id="about">
				<div className="section-heading">
						<span className="section-index">01 / ABOUT ME</span>
					<span className="section-rule" />
				</div>
				<div className="intro-layout">
					<h2>
						Motivated to learn.
						<br />
						<em>Ready to contribute.</em>
					</h2>
					<div className="intro-copy">
						<p>
							I&apos;m a Bachelor of Science in Information Technology student at
							the National College of Science and Technology. I&apos;m eager to
							apply what I&apos;ve learned in programming, computer systems, and
							web development while gaining real-world industry experience.
						</p>
						<p>
							I welcome new challenges, value collaboration, and approach each
							opportunity with responsibility and a willingness to keep learning.
						</p>
							<a
								className="text-link"
								href="/resume.pdf"
								target="_blank"
								rel="noreferrer"
							>
							View my résumé <ArrowUpRight />
						</a>
					</div>
				</div>
			</section>

			<section className="skills-section" id="skills">
				<div className="section-wrap">
					<div className="section-heading section-heading-light">
							<span className="section-index">02 / TECHNICAL SKILLS</span>
						<span className="section-rule" />
					</div>
					<div className="skills-title-row">
						<h2>
							My technical
							<br />
							<em>toolkit.</em>
						</h2>
						<p>
							A growing set of skills and tools I&apos;m ready to bring into a
							professional environment.
						</p>
					</div>
					<div className="skill-grid">
						{skillGroups.map((group) => (
							<article className="skill-card" key={group.number}>
								<div className="skill-card-top">
									<span>{group.number}</span>
									<span className="skill-symbol">{group.symbol}</span>
								</div>
								<h3>{group.title}</h3>
								<p>{group.description}</p>
								<div className="tag-list">
									{group.tags.map((tag) => (
										<span className="tag" key={tag}>
											{tag}
										</span>
									))}
								</div>
							</article>
						))}
					</div>
					<div className="strengths-row">
						<span className="strengths-label">PERSONAL STRENGTHS</span>
						<div className="strengths-list">
							{strengths.map((strength) => (
								<span key={strength}>{strength}</span>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="designs-section section-wrap" id="designs">
				<div className="section-heading">
						<span className="section-index">03 / UI DESIGN DRAFTS</span>
					<span className="section-rule" />
				</div>
				<div className="designs-heading">
					<div>
						<p className="eyebrow">PERSONAL UI EXERCISE</p>
						<h2>
							Designing the
							<br />
							<em>details.</em>
						</h2>
					</div>
					<p>
						Exploring a warm, editorial shopping experience for a flower brand
						through layered interface drafts.
					</p>
				</div>

				<div
					className="design-board screenshot-board petal-board"
					aria-label="Petal and Stem public UI screenshots"
				>
					<div className="screenshot-gallery" aria-label="Petal and Stem UI screenshots">
						<img className="screenshot screenshot-main" src="/Flower%20shop%20(2).png" alt="Flower shop 2 - Petal and Stem interface" />
						<img className="screenshot screenshot-detail screenshot-detail-one" src="/Flower%20shop%20(3).png" alt="Flower shop 3 - Petal and Stem collection" />
						<img className="screenshot screenshot-detail screenshot-detail-two" src="/Flower%20shop%20(1).png" alt="Flower shop 1 - Petal and Stem edit" />
						<img className="screenshot screenshot-detail extra-1" src="/Flower%20shop%20(4).png" alt="Flower shop 4 - Petal and Stem account" />
						<img className="screenshot screenshot-detail extra-2" src="/Flower%20shop%20(5).png" alt="Flower shop 5 - Petal and Stem details" />
						<img className="screenshot screenshot-detail extra-3" src="/Flower%20shop%20(6).png" alt="Flower shop 6 - Petal and Stem checkout" />
					</div>
				</div>
				<div className="design-caption">
					<div>
						<span>PERSONAL UI DESIGN / 01</span>
						<h3>Petal &amp; Stem</h3>
					</div>
					<p>
						A warm editorial flower-shop concept featuring an expressive hero,
						product collection, brand promise, and layered account interface.
						<a className="case-study-link" href="https://www.figma.com/make/HolPTmatYgxMceCxkBvQMi/Bloom-and-Co-Flower-Shop?t=IicLF2tbegGEWGA7-1" target="_blank" rel="noreferrer"><strong>Explore it ↗</strong></a>
					</p>
				</div>

				<div
					className="design-board jhocoffee-board"
					aria-label="Layered Jhocoffee café UI design draft"
				>
					<div className="design-board screenshot-board jhocoffee-gallery-board" aria-label="Jhocoffee public UI screenshots">
						<div className="screenshot-gallery">
							<img className="screenshot screenshot-main" src="/JhoCoffee%20(6).png" alt="JhoCoffee 6 - desktop storefront" />
							<img className="screenshot screenshot-detail screenshot-detail-one" src="/JhoCoffee%20(3).png" alt="JhoCoffee 3 - coffee menu" />
							<img className="screenshot screenshot-detail screenshot-detail-two" src="/JhoCoffee%20(4).png" alt="JhoCoffee 4 - account interface" />
							<img className="screenshot screenshot-detail extra-1" src="/JhoCoffee%20(1).png" alt="JhoCoffee 1 - interface detail" />
							<img className="screenshot screenshot-detail extra-2" src="/JhoCoffee%20(2).png" alt="JhoCoffee 2 - storefront detail" />
							<img className="screenshot screenshot-detail extra-3" src="/JhoCoffee%20(5).png" alt="JhoCoffee 5 - sign in interface" />
							<img className="screenshot screenshot-detail extra-4" src="/JhoCoffee%20(7).png" alt="JhoCoffee 7 - additional interface" />
						</div>
					</div>

					<article className="jhoco-panel jhoco-hero">
						<header>
							<span className="jhoco-brand">Jhocoffee.</span>
							<nav><span>Home</span><span>Menu</span><span>Contact</span></nav>
							<button>Find a cup</button>
						</header>
						<div className="jhoco-hero-copy">
							<small>DAILY ROAST / 2026</small>
							<h3>Your daily cup.<br /><em>A little more joy.</em></h3>
							<button>Explore the menu <span>→</span></button>
						</div>
						<div className="jhoco-cup" aria-hidden="true"><span>☕</span></div>
					</article>

					<article className="jhoco-panel jhoco-feature">
						<div className="jhoco-feature-art"><span>☕</span></div>
						<div className="jhoco-feature-copy">
							<span>OUR FAVORITES</span>
							<h4>A few house favorites.</h4>
							<p>Comforting cups prepared with a smooth, rich, everyday character.</p>
						</div>
					</article>

					<article className="jhoco-panel jhoco-menu">
						<div className="jhoco-menu-head"><div><small>THE COFFEE EDIT</small><h3>Find your kind of coffee.</h3></div><span>View full menu →</span></div>
						<div className="jhoco-products">
							<div><span className="jhoco-badge">HOUSE PICK</span><div className="jhoco-drink jhoco-drink-one">☕</div><h4>Classic white</h4><p>Espresso · milk · soft foam</p><strong>$4.50</strong></div>
							<div><span className="jhoco-badge">DARK &amp; BOLD</span><div className="jhoco-drink jhoco-drink-two">☕</div><h4>Brown sugar latte</h4><p>Espresso · caramel · cinnamon</p><strong>$5.00</strong></div>
							<div><span className="jhoco-badge">REFRESHING</span><div className="jhoco-drink jhoco-drink-three">◉</div><h4>Cold brew cloud</h4><p>Cold brew · cream · vanilla</p><strong>$5.50</strong></div>
						</div>
					</article>

					<article className="jhoco-panel jhoco-login">
						<div className="jhoco-login-copy"><small>WELCOME BACK</small><h3>Your next favorite<br />moment is brewing.</h3></div>
						<div className="jhoco-form"><div className="jhoco-tabs"><strong>Login</strong><span>Register</span></div><label>Email address<input value="hello@example.com" readOnly /></label><label>Password<input value="••••••••" readOnly /></label><button>Sign in <span>→</span></button></div>
					</article>

					<div className="design-tag"><span>CONCEPT 02</span><strong>Jhocoffee</strong></div>
				</div>

				<div className="design-caption jhocoffee-caption">
					<div>
						<span>PERSONAL UI DESIGN / 02</span>
						<h3>Jhocoffee</h3>
					</div>
					<p>
						A cozy café storefront concept with a calm editorial layout,
						featured drinks, a full menu preview, and a layered sign-in experience.
						<a className="case-study-link" href="https://www.figma.com/design/pDnDO36JdqRY8Fb2P3yCdM/Untitled?t=IicLF2tbegGEWGA7-1" target="_blank" rel="noreferrer"><strong>Explore it ↗</strong></a>
					</p>
				</div>

				<div
					className="design-board verne-board"
					aria-label="Layered Verne Tastes bakery and cake shop UI design draft"
				>
					<div className="design-board screenshot-board verne-gallery-board" aria-label="Verne Tastes public UI screenshots">
						<div className="screenshot-gallery">
							<img className="screenshot screenshot-main" src="/Verne%27%20Tastes%20(1).png" alt="Verne Tastes 1 - storefront" />
							<img className="screenshot screenshot-detail screenshot-detail-one" src="/Verne%27%20Tastes%20(2).png" alt="Verne Tastes 2 - cake collection" />
							<img className="screenshot screenshot-detail screenshot-detail-two" src="/Verne%27%20Tastes%20(3).png" alt="Verne Tastes 3 - collection detail" />
							<img className="screenshot screenshot-detail extra-1" src="/Verne%27%20Tastes%20(4).png" alt="Verne Tastes 4 - interface detail" />
							<img className="screenshot screenshot-detail extra-2" src="/Verne%27%20Tastes%20(5).png" alt="Verne Tastes 5 - account interface" />
							<img className="screenshot screenshot-detail extra-3" src="/Verne%27%20Tastes%20(6).png" alt="Verne Tastes 6 - additional interface" />
						</div>
					</div>

					<article className="verne-panel verne-hero">
						<header>
							<span className="verne-brand">Verne&apos; Taste</span>
							<nav><span>Our cakes</span><span>Our story</span><span>Occasion</span></nav>
							<button>Log in / Order</button>
						</header>
						<div className="verne-hero-copy">
							<small>BAKE WITH LOVE / 2026</small>
							<h3>A little slice<br />of happiness.</h3>
							<p>Thoughtfully baked, beautifully finished, and made for the moments worth sharing.</p>
							<button>Discover the collection <span>→</span></button>
						</div>
						<div className="verne-cake-art" aria-hidden="true">
							<div className="cake-cake one" /><div className="cake-cake two" /><div className="cake-cake three" />
						</div>
					</article>

					<article className="verne-panel verne-menu">
						<div className="verne-menu-head"><div><small>OUR SWEET EDIT</small><h3>Pick your happy.</h3></div><button>View cake menu →</button></div>
						<div className="verne-products">
							<div><span className="verne-badge">SIGNATURE</span><div className="verne-cake strawberry">🍓</div><h4>Strawberry cloud</h4><p>Vanilla · berries · cream</p><strong>$28</strong></div>
							<div><span className="verne-badge">RICH &amp; BOLD</span><div className="verne-cake chocolate">◉</div><h4>Chocolate reverie</h4><p>Cacao · ganache · cocoa</p><strong>$32</strong></div>
							<div><span className="verne-badge">HOUSE FAVORITE</span><div className="verne-cake pistachio">●</div><h4>Pistachio dream</h4><p>Pistachio · vanilla · nuts</p><strong>$34</strong></div>
							<div><span className="verne-badge">CELEBRATION</span><div className="verne-cake raspberry">✿</div><h4>Raspberry romance</h4><p>Raspberry · rose · cream</p><strong>$36</strong></div>
						</div>
					</article>

					<article className="verne-panel verne-login">
						<div className="verne-login-art"><span>Verne&apos; Taste</span><h3>Life is sweeter<br />with you here.</h3></div>
						<div className="verne-form"><small>WELCOME BACK</small><h3>Your sweet moment.</h3><div className="verne-tabs"><strong>Login</strong><span>Register</span></div><label>Email address<input value="hello@example.com" readOnly /></label><label>Password<input value="••••••••" readOnly /></label><button>Log in <span>→</span></button></div>
					</article>

					<div className="design-tag"><span>CONCEPT 03</span><strong>Verne&apos; Tastes</strong></div>
				</div>
				<div className="design-caption verne-caption">
					<div>
						<span>PERSONAL UI DESIGN / 03</span>
						<h3>Verne&apos; Tastes</h3>
					</div>
					<p>
						A warm artisan bakery concept combining elegant cake photography,
						curated product cards, celebratory storytelling, and a layered account panel.
						<a className="case-study-link" href="https://www.figma.com/design/NloAW4LVuFRC5HWgb0xNik/Untitled?node-id=0-1&amp;t=Jh0QiKCQ4IHSoEsE-1" target="_blank" rel="noreferrer"><strong>Explore it ↗</strong></a>
					</p>
				</div>

				<div className="design-caption jclothes-caption">
					<div>
						<span>FULL-STACK PROJECT / 04</span>
						<h3>J Clothes</h3>
					</div>
					<p>
						A PHP-powered clothing storefront focused on considered everyday wear,
						complete with product browsing, shopping bag interactions, account access,
						and a responsive editorial shopping experience.
						<a className="case-study-link live-website-link" href="https://j-clothes-php-shop.vercel.app" target="_blank" rel="noreferrer"><strong>Live Website ↗</strong></a>
					</p>
				</div>

				<div className="design-board screenshot-board jclothes-board" aria-label="J Clothes full-stack PHP project screenshots">
					<div className="screenshot-gallery">
						<img className="screenshot screenshot-main" src="/j-clothes/J%20Clothes%201%20-%20Home.png" alt="J Clothes 1 - Home page" />
						<img className="screenshot screenshot-detail screenshot-detail-one" src="/j-clothes/J%20Clothes%202%20-%20Shop.png" alt="J Clothes 2 - Shop page" />
						<img className="screenshot screenshot-detail screenshot-detail-two" src="/j-clothes/J%20Clothes%203%20-%20Sign%20In.png" alt="J Clothes 3 - Sign in page" />
					</div>
				</div>
			</section>

			<section className="selected-works-section section-wrap" id="selected-works">
				<div className="section-heading">
						<span className="section-index">05 / SELECTED WORKS</span>
					<span className="section-rule" />
				</div>

				<div className="selected-work-heading">
					<div>
						<p className="eyebrow">THESIS PLATFORM / 2026</p>
						<h2>CAVITE<br /><em>MotoTech.</em></h2>
					</div>
					<p>
						A motorcycle parts and repair platform connecting Cavite riders with verified shops, searchable parts, workshop services, bookings, and account tools.
						<a className="case-study-link live-website-link" href="https://cavitemototech.ogm1.com/#/" target="_blank" rel="noreferrer"><strong>Live Website ↗</strong></a>
					</p>
				</div>

				<div className="design-board cavite-board" aria-label="CAVITE MotoTech 2026 thesis platform QA case study">
					<article className="cavite-panel cavite-hero">
						<header>
							<span className="cavite-brand">CAVITE<span>◉</span></span>
							<nav><span>Home</span><span>Parts</span><span>Shops</span><span>Services</span></nav>
							<button>Sign up</button>
						</header>
						<div className="cavite-hero-copy">
							<small>THESIS PLATFORM / 2026</small>
							<h3>Motorcycle parts and repairs from verified Cavite shops.</h3>
							<p>Compare parts, explore repair services, and book with trusted workshops.</p>
							<a href="https://cavitemototech.ogm1.com/#/" target="_blank" rel="noreferrer">Explore the live system <span>↗</span></a>
						</div>
						<div className="cavite-product-visual"><div className="product-disc"><span>◉</span></div><div className="visual-switch"><strong>Assembled</strong><span>Exploded</span></div></div>
					</article>

					<article className="cavite-panel cavite-directory">
						<div className="cavite-directory-top"><div><small>WORKSHOP DIRECTORY</small><h3>Verified local workshops</h3></div><span>11 shops matched</span></div>
						<div className="cavite-shop-grid">
							<div><span className="shop-status">PREMIUM</span><div className="shop-icon">⚙</div><h4>Rider Lab Works</h4><p>Silang · 21 km</p><small>Oil change · Brake service</small></div>
							<div><span className="shop-status">OPEN</span><div className="shop-icon">⌂</div><h4>MotoCare Dasma</h4><p>Dasmariñas · 23 km</p><small>Engine repair · Electrical</small></div>
							<div><span className="shop-status">VERIFIED</span><div className="shop-icon">◉</div><h4>CVT Performance</h4><p>Bacoor · 18 km</p><small>Parts · Transmission</small></div>
						</div>
					</article>

					<article className="cavite-panel cavite-services">
						<div><span>BRAKE SERVICE</span><strong>₱500</strong><h4>Brake inspection</h4><p>MotoData Motorcycle Shop</p><button>Book this service</button></div>
						<div><span>ELECTRICAL REPAIR</span><strong>₱1,500</strong><h4>Battery &amp; wiring check</h4><p>QA Harbor Moto Garage</p><button>Book this service</button></div>
						<div><span>OIL CHANGE</span><strong>₱200</strong><h4>Full synthetic oil</h4><p>Karu&apos;s MotorHub</p><button>Book this service</button></div>
					</article>

					<article className="cavite-panel cavite-account">
						<div className="cavite-account-copy"><span>CAVITE MOTO TECH</span><h3>One account<br />for your bike.</h3><p>Manage your builds, bookings, orders, and saved workshops.</p></div>
						<div className="cavite-form"><small>WELCOME BACK</small><h3>Sign in</h3><label>Email address<input value="rider@example.com" readOnly /></label><label>Password<input value="••••••••" readOnly /></label><button>Sign in <span>→</span></button></div>
					</article>

					<a className="cavite-qa-tag" href="https://cavitemototech.ogm1.com/#/" target="_blank" rel="noreferrer">
						<span>QA CASE STUDY</span><strong>Explore live system ↗</strong>
					</a>

					<div className="design-board screenshot-board cavite-gallery-board" aria-label="CAVITE MotoTech public QA screenshots">
						<div className="screenshot-gallery">
							<img className="screenshot screenshot-main" src="/MOTO%20CVT.png" alt="MOTO CVT - main thesis dashboard" />
							<img className="screenshot screenshot-detail screenshot-detail-one" src="/MOTO%20CVT%20(1).png" alt="MOTO CVT 1 - workshop directory" />
							<img className="screenshot screenshot-detail screenshot-detail-two" src="/MOTO%20CVT%20(2).png" alt="MOTO CVT 2 - account interface" />
							<img className="screenshot screenshot-detail extra-1" src="/MOTO%20CVT%20(3).png" alt="MOTO CVT 3 - parts interface" />
							<img className="screenshot screenshot-detail extra-2" src="/MOTO%20CVT%20(4).png" alt="MOTO CVT 4 - booking interface" />
							<img className="screenshot screenshot-detail extra-3" src="/MOTO%20CVT%20(5).png" alt="MOTO CVT 5 - service interface" />
						</div>
					</div>
				</div>
			</section>

			<section className="education-section section-wrap" id="education">
				<div className="section-heading">
						<span className="section-index">06 / EDUCATION</span>
					<span className="section-rule" />
				</div>
				<div className="education-layout">
					<div>
						<p className="eyebrow">ACADEMIC BACKGROUND</p>
						<h2>Building a strong<br /><em>foundation.</em></h2>
					</div>
					<article className="education-card">
						<div className="education-card-top"><span>COLLEGE</span><span>PHILIPPINES</span></div>
						<div className="education-monogram">NCST</div>
						<h3>National College of Science and Technology</h3>
						<p>Bachelor of Science in Information Technology</p>
						<p className="education-dates">Sept 2023 - 2027</p>
						<div className="education-location"><span className="location-dot" /> Cavite, Philippines</div>
					</article>
				</div>

				<div className="continuing-education">
					<div className="continuing-heading">
						<div>
							<p className="eyebrow">CONTINUING EDUCATION</p>
							<h2>Course<br /><em>Certificates.</em></h2>
						</div>
						<p>Professional learning and completed courses that strengthen my software-development foundation.</p>
					</div>
					<article className="certificate-card">
						<img src="/javascript%20cert.png" alt="JavaScript course certificate" />
						<div className="certificate-caption">
							<span>COURSE CERTIFICATE</span>
							<h3>Introduction to JavaScript</h3>
							<p>SoloLearn · Issued 20 June 2024</p>
						</div>
					</article>
				</div>
			</section>

			<section className="objective-section">
				<div className="objective-inner">
						<span className="section-index">07 / MY OBJECTIVE</span>
					<p className="objective-quote">“I aim to contribute my knowledge, dedication, and willingness to learn while preparing myself for future career opportunities.”</p>
					<span className="objective-note">READY FOR THE NEXT LEARNING OPPORTUNITY</span>
				</div>
			</section>

			<section className="contact-section section-wrap" id="contact">
				<div className="section-heading">
						<span className="section-index">08 / CONTACT</span>
					<span className="section-rule" />
				</div>
				<div className="contact-layout">
					<div>
						<p className="eyebrow">HAVE AN OJTPPORTUNITY?</p>
						<h2>Let&apos;s make<br /><em>something matter.</em></h2>
						<p className="contact-intro">I&apos;d be glad to connect and discuss how I can learn, contribute, and grow with your team.</p>
						<a className="button button-dark" href="mailto:vhaniemorcilla4785@gmail.com">Send me an email <ArrowUpRight /></a>
					</div>
					<div className="contact-details">
						<a href="mailto:vhaniemorcilla4785@gmail.com" className="contact-item"><span className="contact-label">EMAIL</span><span>vhaniemorcilla4785@gmail.com</span><ArrowUpRight /></a>
						<a href="tel:+639197750461" className="contact-item"><span className="contact-label">PHONE</span><span>+63 919 775 0461</span><ArrowUpRight /></a>
						<div className="contact-item contact-static"><span className="contact-label">LOCATION</span><span>Cavite, Philippines</span><span className="location-pin">⌖</span></div>
						<div className="reference-note">PROFESSIONAL REFERENCES<br /><strong>Available this soon.</strong></div>
					</div>
				</div>
			</section>

			<footer className="site-footer">
				<a className="footer-brand" href="#home">JM<span>.</span></a>
				<span>© {new Date().getFullYear()} Jhoverne Morcilla</span>
				<a href="#home" className="back-to-top">BACK TO TOP ↑</a>
			</footer>
		</main>
	);
}
