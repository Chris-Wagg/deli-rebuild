import DropdownMenu from '../components/DropdownMenu'
import NavBar from '../components/NavBar'
import NavItem from '../components/NavItem'

export default function Home() {
	return (
		<NavBar>
			<NavItem icon="Home" />
			<NavItem icon="Menu's">
				<DropdownMenu></DropdownMenu>
			</NavItem>
			<NavItem icon="Catering" />
			<NavItem icon="Contact us" />
		</NavBar>
	)
}
