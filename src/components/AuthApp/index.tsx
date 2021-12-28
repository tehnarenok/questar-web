import useAuth from "@hooks/useAuth"
import { ReactElement, ReactNode } from "react"
import { JsxElement } from "typescript"

type AuthAppProps = {
	fallback: ReactElement | ReactNode | JsxElement,
	children: ReactElement | ReactNode | JsxElement
}

const AuthApp = (props: AuthAppProps) => {
	const { isAuth } = useAuth()

	if (!isAuth) {
		return (
			<>
				{props.fallback}
			</>
		)
	}

	return (
		<>
			{props.children}
		</>
	)
}

export default AuthApp