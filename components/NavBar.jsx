import LeftDrawer from './LeftDrawer'

export default function NavBar() {
	return (
		<nav className="navbar-container">
			<div className="logo-container">Funkadeli</div>
			<div className="nav-buttons-container">
				<button>Home</button>
				<button>Menu</button>
				<button>Catering</button>
				{/* scroll down to catering section here */}

				<button>Contact</button>
				{/* make contact scroll down to the footer where all the contact info will be */}
				{/* <div className="drawer-button">
					<LeftDrawer />
				</div> */}
				<div className="socials-buttons">
					<button>Facebook</button>
					<button>Instagram</button>
				</div>
			</div>
		</nav>
	)
}
