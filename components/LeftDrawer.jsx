import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'

export default function LeftDrawer() {
	const [state, setState] = React.useState({
		left: false,
	})

	const toggleDrawer = (anchor, open) => (event) => {
		setState({ ...state, [anchor]: open })
	}

	const list = (anchor) => (
		<Box
			sx={{
				width: 250,
			}}
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		></Box>
	)

	return (
		<div>
			{['left'].map((anchor) => (
				<React.Fragment key={anchor}>
					<button onClick={toggleDrawer(anchor, true)}>Menu</button>
					<Drawer
						anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}
					>
						{list(anchor)}
						<button>jeff</button>
					</Drawer>
				</React.Fragment>
			))}
		</div>
	)
}
