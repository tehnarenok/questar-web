import Home from "@screens/Home"
import {
	Route,
	Routes,
	Navigate
} from 'react-router-dom'

const AuthenticatedApp = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="*" element={<Navigate to='/' />} />
		</Routes>
	)
}

export default AuthenticatedApp