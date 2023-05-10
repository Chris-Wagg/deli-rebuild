import LeftDrawer from '../components/LeftDrawer'

export default function HeroSection() {
	return (
		<>
			<section className="hero-container">
				{/* logo should go here */}
				<div className="hero-text-container">
					<h1 className="hero-text">Den mysiga Delin på Gärdet</h1>
					<h2 className="info-text">
						Smit in för en frukost, lunch eller middag. Vi har öppet alla dagar
						i veckan. Varmt välkommen!
					</h2>
					<div className="opening-hours-text">
						<ul>
							Öppet:
							<div>Måndag - Tisdag 8-15</div>
							<div>Onsdag - fredag 8-21</div>
							<div>lördag 11-21</div>
							<div>söndag 11-20</div>
						</ul>
					</div>
					<div className="button-container">
						<LeftDrawer />
						<button>Catering</button>
					</div>
				</div>
				<div>
					<img src="food-3.jpg" alt="food-1-image" />
				</div>
			</section>
		</>
	)
}
