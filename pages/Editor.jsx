import React from 'react'
import { useSession, signOut } from 'next-auth/react'

const Editor = () => {
	const { data: session, status } = useSession({ required: true })
	// const userName = session.user.name

	// if (process.env.PROTECTED_CLIENT_NAME === userName) {
	if (status === 'authenticated') {
		return (
			<>
				<p> hi {session.user.name}</p>
				<button onClick={() => signOut()}>sign out</button>
			</>
		)
	} else {
		return (
			<div>
				<p>this is a protected page</p>
			</div>
		)
	}
}

export default Editor
