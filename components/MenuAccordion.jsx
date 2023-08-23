import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { grey } from '@mui/material/colors'

export default function MenuAccordion() {
	return (
		<div>
			<Accordion className='menu-accordion'>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon sx={{ color: grey[50] }} />}>
					Frokost Meny | kl 8:00 - 11:00
				</AccordionSummary>
				<AccordionDetails></AccordionDetails>
			</Accordion>
			<Accordion className='menu-accordion'>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon sx={{ color: grey[50] }} />}>
					Lunch Meny | kl 11:00 - 14:30
				</AccordionSummary>
				<AccordionDetails>
					<img src='lunch-menu.jpg' alt='Lunch Menu' />
				</AccordionDetails>
			</Accordion>
			<Accordion className='menu-accordion'>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon sx={{ color: grey[50] }} />}>
					Kvells Meny | Fran kl 17:00
				</AccordionSummary>
				<AccordionDetails>
					<img src='dinner-menu.jpg' alt='Dinner Menu' />
				</AccordionDetails>
			</Accordion>
		</div>
	)
}
