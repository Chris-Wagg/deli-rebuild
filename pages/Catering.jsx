export default function Catering() {
	// breakfast package can go here as well

	return (
		<>
			<section className="catering-container">
				<div className="breakfast-package">
					{/* put these in a details to take up less space */}
					<details>
						<summary>STORA FRUKOSTPAKETET</summary>
						<p>Bokas 2 dagar innan,minimum 8 pers mellan 8.00-10.30</p>
						<p>- Surdegsfralla med ost / skinka / kalkon</p>
						<p>- Apelsinjuice / Äppeljuice</p>
						<p>- Fruktsallad</p>
						<p>- Overnight Oats med banan & nötter</p>
						<p>- Smoothie</p>
						<p>- Kaffe / Te</p>
						<p>125kr</p>
					</details>
				</div>
				<div className="buffet-container">
					<div className="small-buffet">
						<details>
							<summary>LILLA BUFFEN</summary>
							<p>- Fetaostpaj</p>
							<p>- Skinka & ostpaj</p>
							<p>- Skivad Serrano</p>
							<p>- Picklad rödlök</p>
							<p>- Rödpest</p>
							<p>- Blandad sallad med 2 sorters dressing</p>
							<p>- Bröd och smör</p>
							<p>175 kr per person</p>
						</details>
					</div>
				</div>
				<details>
					<summary>Small Student buffet</summary>
					<p>Skagen canapé</p>
					<p>Varmrökt lax med forellromskräm</p>
					<p>Marinerad rostbiff med rostad lök </p>
					<p>Krämig potatissallad med senap och kapris</p>
					<p>Ädelostsallad med päron & valnötter</p>
					<p>Surdegsbröd med vispat brynt smör </p>
					<p>Chokladmousse med vispad grädde och färska bär</p>
					<p>245 kr per person minst 10 personer</p>
				</details>
				<details>
					<summary>Large Student buffet</summary>
					<p>everything from the Small buffet plus the following</p>
					<p>+ Tunnbrödsnitt med kallrökt lax & färskost</p>
					<p>+ Honungsglaserade morötter med rostad bovete</p>
					<p>+ Pastasallad med picklad gurka & dill</p>
					<p>+ Rädisor med färskostdipp </p>
					<p>+ Blandad grönsallad</p>
					<p>295 kr per person minst 10 personer</p>
					<p></p>
				</details>
			</section>
		</>
	)
}
