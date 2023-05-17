import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function CateringAccordion() {
	return (
		<div>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					STORA FRUKOSTPAKETET
				</AccordionSummary>
				<AccordionDetails>
					<ul>
						<p>Bokas 2 dagar innan,minimum 8 pers mellan 8.00-10.30</p>
						<li> Surdegsfralla med ost / skinka / kalkon</li>
						<li> Apelsinjuice / Äppeljuice</li>
						<li> Fruktsallad</li>
						<li> Overnight Oats med banan & nötter</li>
						<li> Smoothie</li>
						<li> Kaffe / Te</li>
						<p>125kr</p>
					</ul>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					LILLA BUFFEN
				</AccordionSummary>
				<AccordionDetails>
					<ul>
						<li> Fetaostpaj</li>
						<li> Skinka & ostpaj</li>
						<li> Skivad Serrano</li>
						<li> Picklad rödlök</li>
						<li> Rödpest</li>
						<li> Blandad sallad med 2 sorters dressing</li>
						<li> Bröd och smör</li>
						<p>175 kr per person</p>
					</ul>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					LILLA STUDENT BUFFEN
				</AccordionSummary>
				<AccordionDetails>
					<ul>
						<li>Skagen canapé</li>
						<li>Varmrökt lax med forellromskräm</li>
						<li>Marinerad rostbiff med rostad lök </li>
						<li>Krämig potatissallad med senap och kapris</li>
						<li>Ädelostsallad med päron & valnötter</li>
						<li>Surdegsbröd med vispat brynt smör </li>
						<li>Chokladmousse med vispad grädde och färska bär</li>
						<p>245 kr per person minst 10 personer</p>
					</ul>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					STORA STUDENT BUFFEN
				</AccordionSummary>
				<AccordionDetails>
					<ul>
						<p>everything from the Small buffet plus the following</p>
						<li>+ Tunnbrödsnitt med kallrökt lax & färskost</li>
						<li>+ Honungsglaserade morötter med rostad bovete</li>
						<li>+ Pastasallad med picklad gurka & dill</li>
						<li>+ Rädisor med färskostdipp </li>
						<li>+ Blandad grönsallad</li>
						<p>295 kr per person minst 10 personer</p>
					</ul>
				</AccordionDetails>
			</Accordion>
		</div>
	)
}
