import Footer from '../components/Footer'
import ImageSlider from '../components/ImageSlider'
import LeftDrawer from '../components/LeftDrawer'
import NavBar from '../components/NavBar'
import BreakfastMenu from './BreakfastMenu'
import HeroSection from './HeroSection'

export default function Home() {
	return (
		<>
			<NavBar />
			<HeroSection />
			<ImageSlider />
			<BreakfastMenu />
			{/* <LeftDrawer /> */}
			<Footer />
		</>
	)
}
