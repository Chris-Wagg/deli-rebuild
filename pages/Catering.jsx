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
			</section>
		</>
	)
}
