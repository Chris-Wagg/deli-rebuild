import DropdownMenu from '../components/DropdownMenu'
import NavBar from '../components/NavBar'
import NavItem from '../components/NavItem'

import BellIcon from '../public/bell.svg'
import { ReactComponent as MessengerIcon } from '../public/messenger.svg'
import { ReactComponent as CaretIcon } from '../public/caret.svg'
import { ReactComponent as PlusIcon } from '../public/plus.svg'

export default function Home() {
	return (
		<NavBar>
			<NavItem icon="Jeff" />
			<NavItem icon="Jeff" />
			<NavItem icon="Jeff" />

			<NavItem icon="Menu">
				<DropdownMenu></DropdownMenu>
			</NavItem>
		</NavBar>
	)
}
