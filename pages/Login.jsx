import { useSession, signIn, signOut } from 'next-auth/react'

export default function login() {
	const { data: session } = useSession()

	if (session) {
		return (
			<div>
				<p>welcome, {session.user.name}</p>
				<button onClick={() => signOut()}>sign out</button>
			</div>
		)
	} else {
		return (
			<div>
				<p>not logged in</p>
				<button onClick={() => signIn()}>sign in</button>
			</div>
		)
	}
}
