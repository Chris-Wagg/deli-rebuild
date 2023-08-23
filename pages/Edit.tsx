import Link from 'next/link'
import React from 'react'
import { prisma } from '@/db'
import { redirect } from 'next/navigation'

async function createTodo(data: FormData) {
	'use server'

	const title = data.get('title')?.valueOf()
	// takes title from the form
	if (typeof title !== 'string' || title.length === 0) {
		throw new Error('Invalid title')
	}

	await prisma.todo.create({ data: { title, complete: false } })

	redirect('/')
}

export default function Page(props) {
	return (
		<>
			<header className='flex justify-between items-center mb-4'>
				<h1 className='test-2x1'>New</h1>
			</header>
			<form
				action={createTodo}
				// adding server actions allwos form actions to interact directly with server
				className='flex gap-2 flex-col'>
				<input
					type='text'
					name='title'
					className='border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100'
				/>
				<div className='flex gap-1 justify-end'>
					<Link
						href='..'
						className='border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100'>
						Cancel
					</Link>
					<button
						type='submit'
						className='border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100'>
						create
					</button>
				</div>
			</form>
		</>
	)
}
