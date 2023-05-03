import Footer from '../components/Footer'

import LeftDrawer from '../components/LeftDrawer'
import NavBar from '../components/NavBar'
import BreakfastMenu from './BreakfastMenu'
import HeroSection from './HeroSection'

export default function Home() {
	return (
		<>
			<NavBar />
			<HeroSection />

			<BreakfastMenu />
			{/* <LeftDrawer /> */}
			<Footer />
		</>
	)
}
