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
							download="Jhoverne-Morcilla-Resume.pdf"
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
					className="design-board"
					aria-label="Layered Petal and Stem flower shop UI design draft"
				>
					<article className="design-panel design-hero">
						<header>
							<span className="petal-brand">
								✿ <strong>Petal &amp; Stem</strong>
							</span>
							<nav>
								<span>Home</span>
								<span>Flowers</span>
								<span>Account</span>
							</nav>
						</header>
						<div className="petal-hero-copy">
							<small>FLORALS WITH A LITTLE WILDNESS</small>
							<h3>
								Flowers,
								<br />
								thoughtfully
								<br />
								gathered.
							</h3>
							<button>
								Shop the collection <span>→</span>
							</button>
						</div>
						<div className="petal-backdrop" />
					</article>

					<article className="design-panel design-promise">
						<span className="panel-label">OUR PROMISE / 01</span>
						<blockquote>
							“ No stiff bouquets. Just beautiful flowers that look like they grew
							together.”
						</blockquote>
						<div className="promise-caption">
							— Mara, founder &amp; head florist
						</div>
					</article>

					<article className="design-panel design-products">
						<div className="product-heading">
							<span>Showing 6 fresh arrangements</span>
							<strong>FREE LOCAL DELIVERY OVER $90</strong>
						</div>
						<div className="product-grid">
							<div>
								<span className="product-badge">FLORIST&apos;S PICK</span>
								<div className="product-art product-art-one">✿</div>
								<h4>Apricot Reverie</h4>
								<p>Garden roses · ranunculus</p>
							</div>
							<div>
								<span className="product-badge">SEASONAL</span>
								<div className="product-art product-art-two">❧</div>
								<h4>Wild Meadow</h4>
								<p>Cosmos · chamomile</p>
							</div>
							<div>
								<span className="product-badge">BESTSELLER</span>
								<div className="product-art product-art-three">♧</div>
								<h4>Blush Hour</h4>
								<p>Peonies · spray roses</p>
							</div>
						</div>
					</article>

					<article className="design-panel design-login">
						<div className="login-photo">
							<span>THE STEM SOCIETY</span>
							<strong>A beautiful reason to come home.</strong>
						</div>
						<div className="login-form">
							<small>WELCOME BACK</small>
							<h3>Come on in.</h3>
							<div className="login-tabs">
								<strong>Login</strong>
								<span>Register</span>
							</div>
							<label>
								Email address
								<input value="hello@example.com" readOnly />
							</label>
							<label>
								Password
								<input value="••••••••" readOnly />
							</label>
							<button>
								Sign in <span>→</span>
							</button>
						</div>
					</article>

					<div className="design-tag">
						<span>CONCEPT 01</span>
						<strong>Petal &amp; Stem</strong>
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
					</p>
				</div>

				<div
					className="design-board jhocoffee-board"
					aria-label="Layered Jhocoffee café UI design draft"
				>
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
					</p>
				</div>

				<div
					className="design-board verne-board"
					aria-label="Layered Verne Tastes bakery and cake shop UI design draft"
				>
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
				</div>

				<div className="design-caption cavite-caption">
					<div>
						<span>THESIS PLATFORM / 04</span>
						<h3>CAVITE MotoTech</h3>
					</div>
					<p>
						A 2026 motorcycle parts and repair platform for Cavite riders, developed to connect users with verified shops, searchable parts, workshop services, and booking features.
						<a href="https://cavitemototech.ogm1.com/#/" target="_blank" rel="noreferrer"><strong>Explore QA Case Study ↗</strong></a>
					</p>
				</div>
			</section>

			<section className="education-section section-wrap" id="education">
				<div className="section-heading">
					<span className="section-index">05 / EDUCATION</span>
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
						<div className="education-location"><span className="location-dot" /> Cavite, Philippines</div>
					</article>
				</div>
			</section>

			<section className="objective-section">
				<div className="objective-inner">
					<span className="section-index">06 / MY OBJECTIVE</span>
					<p className="objective-quote">“I aim to contribute my knowledge, dedication, and willingness to learn while preparing myself for future career opportunities.”</p>
					<span className="objective-note">READY FOR THE NEXT LEARNING OPPORTUNITY</span>
				</div>
			</section>

			<section className="contact-section section-wrap" id="contact">
				<div className="section-heading">
					<span className="section-index">07 / CONTACT</span>
					<span className="section-rule" />
				</div>
				<div className="contact-layout">
					<div>
						<p className="eyebrow">HAVE AN OJT OPPORTUNITY?</p>
						<h2>Let&apos;s make<br /><em>something matter.</em></h2>
						<p className="contact-intro">I&apos;d be glad to connect and discuss how I can learn, contribute, and grow with your team.</p>
						<a className="button button-dark" href="mailto:vhaniemorcilla4785@gmail.com">Send me an email <ArrowUpRight /></a>
					</div>
					<div className="contact-details">
						<a href="mailto:vhaniemorcilla4785@gmail.com" className="contact-item"><span className="contact-label">EMAIL</span><span>vhaniemorcilla4785@gmail.com</span><ArrowUpRight /></a>
						<a href="tel:+639197750461" className="contact-item"><span className="contact-label">PHONE</span><span>+63 919 775 0461</span><ArrowUpRight /></a>
						<div className="contact-item contact-static"><span className="contact-label">LOCATION</span><span>Cavite, Philippines</span><span className="location-pin">⌖</span></div>
						<div className="reference-note">PROFESSIONAL REFERENCES<br /><strong>Available upon request.</strong></div>
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
