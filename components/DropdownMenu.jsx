import { CSSTransition } from 'react-transition-group'
import { useState, useRef, useEffect } from 'react'

import { ReactComponent as CogIcon } from '../public/cog.svg'
import { ReactComponent as ChevronIcon } from '../public/chevron.svg'
import { ReactComponent as ArrowIcon } from '../public/arrow.svg'
import { ReactComponent as BoltIcon } from '../public/bolt.svg'

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
				<span className="icon-button">{props.leftIcon}</span>
				{props.children}
				<span className="icon-right">{props.rightIcon}</span>
			</a>
		)
	}

	return (
		<div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
			<CSSTransition
				in={activeMenu === 'main'}
				timeout={500}
				classNames="menu-primary"
				unmountOnExit
				onEnter={calcHeight}
			>
				<div className="menu">
					<DropdownItem>My Profile</DropdownItem>
					<DropdownItem goToMenu="settings">Settings</DropdownItem>
					<DropdownItem
						leftIcon="🦧"
						rightIcon={
							<svg viewBox="0 0 256 512">
								<path
									d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
									class=""
								></path>
							</svg>
						}
						goToMenu="animals"
					>
						Animals
					</DropdownItem>
				</div>
			</CSSTransition>

			<CSSTransition
				in={activeMenu === 'settings'}
				timeout={500}
				classNames="menu-secondary"
				unmountOnExit
				onEnter={calcHeight}
			>
				<div className="menu">
					<DropdownItem
						goToMenu="main"
						leftIcon={
							<svg viewBox="0 0 448 512">
								<path
									fill="currentColor"
									d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
									class=""
								></path>
							</svg>
						}
					>
						<h2>My Tutorial</h2>
					</DropdownItem>
					<DropdownItem
						leftIcon={
							<svg viewBox="0 0 320 512">
								<path
									d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"
									class=""
								></path>
							</svg>
						}
					>
						HTML
					</DropdownItem>
					<DropdownItem
						leftIcon={
							<svg viewBox="0 0 320 512">
								<path
									d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"
									class=""
								></path>
							</svg>
						}
					>
						CSS
					</DropdownItem>
					<DropdownItem
						leftIcon={
							<svg viewBox="0 0 320 512">
								<path
									d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"
									class=""
								></path>
							</svg>
						}
					>
						JavaScript
					</DropdownItem>
					<DropdownItem
						leftIcon={
							<svg viewBox="0 0 320 512">
								<path
									d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"
									class=""
								></path>
							</svg>
						}
					>
						Awesome!
					</DropdownItem>
				</div>
			</CSSTransition>

			<CSSTransition
				in={activeMenu === 'animals'}
				timeout={500}
				classNames="menu-secondary"
				unmountOnExit
				onEnter={calcHeight}
			>
				<div className="menu">
					<DropdownItem
						goToMenu="main"
						leftIcon={
							<svg viewBox="0 0 448 512">
								<path
									fill="currentColor"
									d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
									class=""
								></path>
							</svg>
						}
					>
						<h2>Animals</h2>
					</DropdownItem>
					<DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
					<DropdownItem leftIcon="🐸">Frog</DropdownItem>
					<DropdownItem leftIcon="🦋">Horse?</DropdownItem>
					<DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
				</div>
			</CSSTransition>
		</div>
	)
}
