export default function NavBar(props) {
	return (
		<nav className="navbar">
			<ul className="navbar-nav">{props.children}</ul>
		</nav>
	)
}
