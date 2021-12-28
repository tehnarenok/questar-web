import {useEffect, useState} from "react"
import {atom, useRecoilState} from "recoil";

const authState = atom({
	key: 'isAuth',
	default: false
})

const useAuth = () => {
	const [isAuth, setIsAuth] = useRecoilState<boolean>(authState)

	useEffect(() => {
		const isAuthLocalStorage = localStorage.getItem('isAuth')
		if(isAuthLocalStorage === 'true') {
			setIsAuth(true)
		}
	}, [])

	const signIn = (username: string) => {
		setIsAuth(true)
		localStorage.setItem('isAuth', 'true')
		localStorage.setItem('currentUser', username)
	}

	const signOut = () => {
		setIsAuth(false)
		localStorage.setItem('isAuth', 'false')
	}

	return {
		isAuth,
		signIn,
		signOut
	}
}

export default useAuth