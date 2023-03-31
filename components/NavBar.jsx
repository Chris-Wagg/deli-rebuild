import MenuDropDownButton from './MenuDropDownButton'

export default function NavBar() {
	document.addEventListener('click', (e) => {
		const isDropdownButton = e.target.matches('[data-dropdown-button]')
		if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

		let currentDropdown
		if (isDropdownButton) {
			currentDropdown = e.target.closest('[data-dropdown]')
			currentDropdown.classList.toggle('active')
		}

		document.querySelectorAll('[data-dropdown].active').forEach((dropdown) => {
			if (dropdown === currentDropdown) return
			dropdown.classList.remove('active')
		})
	})

	return (
		<header className="nav-container">
			<MenuDropDownButton />
			<MenuDropDownButton />
			<MenuDropDownButton />
			<MenuDropDownButton />
		</header>
	)
}
