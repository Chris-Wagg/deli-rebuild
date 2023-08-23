import Link from 'next/link'
import React from 'react'
import { prisma } from './db'
import { redirect } from 'next/navigation'

async function addBreakfastItem(data: FormData) {
	'use server'

	const breakfastItem = data.get('breakfastItem')?.valueOf()
	if (typeof breakfastItem !== 'string' || breakfastItem.length === 0) {
		throw new Error('invalid item')
	}
	const price = data.get('price')?.valueOf()
	if (typeof price !== 'number' || breakfastItem.length === 0) {
		throw new Error('invalid price')
	}

	await prisma.breakfastMenu.create({ data: { breakfastItem, price } })
}

export default function Edit(props) {
	return (
		<>
			<header>
				<h1>New stuff</h1>
			</header>
			<form action={addBreakfastItem}>
				<input type='text' name='breakfastItem' />
				<input type='number' name='price' />
				<div>
					<button type='submit'>add</button>
				</div>
			</form>
		</>
	)
}
