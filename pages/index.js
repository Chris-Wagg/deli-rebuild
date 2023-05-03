import Footer from '../components/Footer'

import LeftDrawer from '../components/LeftDrawer'
import NavBar from '../components/NavBar'
import BreakfastMenu from './BreakfastMenu'
import Catering from './Catering'
import HeroSection from './HeroSection'

export default function Home() {
	return (
		<>
			<NavBar />
			<HeroSection />

			<BreakfastMenu />
			{/* <LeftDrawer /> */}
			<Catering />

			<Footer />
		</>
	)
}
