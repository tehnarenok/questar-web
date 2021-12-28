import { useState } from "react"

const useAuth = () => {
	const [isAuth, setIsAuth] = useState<boolean>(false)

	const signIn = () => {
		setIsAuth(true)
	}

	const signOut = () => {
		setIsAuth(false)
	}

	return {
		isAuth,
		signIn,
		signOut
	}
}

export default useAuth