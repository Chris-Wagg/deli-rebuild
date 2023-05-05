export default function Footer() {
	return (
		<footer className="footer">
			<h1>footer</h1>
			<section className="opening-hours-container">
				<div className="opening-hours-text">
					<ul>
						<li>Öppet:</li>
						<li>måndag - fredag 8-21</li>
						<li>lördag 11-21</li>
						<li>söndag 11-20</li>
					</ul>
				</div>
			</section>
			<div>Email: </div>
			<div>Phone: 08-660 85 55</div>
			<div>Adress: Sandhamnsgatan 39, 11528 Stockholm</div>
			<div>work with us?</div>
			{/* will need a login button here potentially for the admin side of the site */}
		</footer>
	)
}
