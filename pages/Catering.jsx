export default function Catering() {
	// breakfast package can go here as well

	return (
		<>
			<section className="catering-container">
				<div className="breakfast-package">
					{/* put these in a details to take up less space */}
					<details>
						<summary>STORA FRUKOSTPAKETET</summary>
						<ul>
							<p>Bokas 2 dagar innan,minimum 8 pers mellan 8.00-10.30</p>
							<li> Surdegsfralla med ost / skinka / kalkon</li>
							<li> Apelsinjuice / Äppeljuice</li>
							<li> Fruktsallad</li>
							<li> Overnight Oats med banan & nötter</li>
							<li> Smoothie</li>
							<li> Kaffe / Te</li>
							<p>125kr</p>
						</ul>
					</details>
				</div>
				<div className="buffet-container">
					<details>
						<summary>LILLA BUFFEN</summary>
						<ul>
							<li> Fetaostpaj</li>
							<li> Skinka & ostpaj</li>
							<li> Skivad Serrano</li>
							<li> Picklad rödlök</li>
							<li> Rödpest</li>
							<li> Blandad sallad med 2 sorters dressing</li>
							<li> Bröd och smör</li>
							<p>175 kr per person</p>
						</ul>
					</details>
					<details>
						<summary>Small Student buffet</summary>
						<ul>
							<li>Skagen canapé</li>
							<li>Varmrökt lax med forellromskräm</li>
							<li>Marinerad rostbiff med rostad lök </li>
							<li>Krämig potatissallad med senap och kapris</li>
							<li>Ädelostsallad med päron & valnötter</li>
							<li>Surdegsbröd med vispat brynt smör </li>
							<li>Chokladmousse med vispad grädde och färska bär</li>
							<p>245 kr per person minst 10 personer</p>
						</ul>
					</details>
					<details>
						<summary>Large Student buffet</summary>
						<ul>
							<p>everything from the Small buffet plus the following</p>
							<li>+ Tunnbrödsnitt med kallrökt lax & färskost</li>
							<li>+ Honungsglaserade morötter med rostad bovete</li>
							<li>+ Pastasallad med picklad gurka & dill</li>
							<li>+ Rädisor med färskostdipp </li>
							<li>+ Blandad grönsallad</li>
							<p>295 kr per person minst 10 personer</p>
						</ul>
					</details>
				</div>
			</section>
		</>
	)
}
