import CateringAccordion from '../components/CateringAccordion'

export default function Catering() {
	// breakfast package can go here as well

	return (
		<>
			<section className="catering-container">
				<h1>Catering</h1>
				<h2>
					For big and small groups both, check out some of our options below!
				</h2>
				<CateringAccordion />
				<h2>
					Questions about some private catering? Reach out to us at 08-660 85
					55, *email here* or come down and see us at Sandhamnsgatan 39!
				</h2>
			</section>
		</>
	)
}
