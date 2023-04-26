import { CSSTransition } from 'react-transition-group'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

export default function DropdownMenu() {
	const [activeMenu, setActiveMenu] = useState('main')
	const [menuHeight, setMenuHeight] = useState(null)
	const dropdownRef = useRef(null)

	useEffect(() => {
		setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
	}, [])

	function calcHeight(el) {
		const height = el.offsetHeight
		setMenuHeight(height)
	}

	function DropdownItem(props) {
		return (
			<a
				href="#"
				className="menu-item"
				onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
			>
				{props.children}
			</a>
		)
	}

	return (
		<div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
			<div className="menu">
				<DropdownItem>
					<Link href="/BreakfastMenu" className="menu-link">
						Breakfast
					</Link>
				</DropdownItem>

				<DropdownItem>
					<Link href="/BreakfastMenu" className="menu-link">
						Brunch
					</Link>
				</DropdownItem>

				<DropdownItem>
					<Link href="/BreakfastMenu" className="menu-link">
						Lunch
					</Link>
				</DropdownItem>

				<DropdownItem>
					<Link href="/BreakfastMenu" className="menu-link">
						Dinner
					</Link>
				</DropdownItem>
			</div>
		</div>
	)
}
