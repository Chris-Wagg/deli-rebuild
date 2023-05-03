export default function Catering() {
	// breakfast package can go here as well
	return (
		<>
			<section className="catering-container">
				<div className="breakfast-package">
					<h1>STORA FRUKOSTPAKETET</h1>
					<p>Bokas 2 dagar innan,minimum 8 pers mellan 8.00-10.30</p>
					<p>Surdegsfralla med ost / skinka / kalkon</p>
					<p>Apelsinjuice / Äppeljuice</p>
					<p>Fruktsallad</p>
					<p>Overnight Oats med banan & nötter</p>
					<p>Smoothie</p>
					<p>Kaffe / Te</p>
					<p>125kr</p>
				</div>
				<div className="buffet-container">
					<div className="small-buffet">
						{`Fetaostpaj Skinka & ostpaj Skivad Serrano Picklad rödlök Rödpesto
						Blandad sallad med 2 sorters dressing Bröd och smör 175 kr per
						person`}
					</div>
				</div>
			</section>
		</>
	)
}
