'use client'

import React from 'react'

type breakfastItemProps = {
	id: string
	breakfastItem: string
	price: number
}

export default function BreakfastItems({
	breakfastItem,
	price,
}: breakfastItemProps) {
	return (
		<li>
			{breakfastItem}: {price}kr
		</li>
	)
}
