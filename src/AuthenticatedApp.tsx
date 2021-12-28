import Home from "@screens/Home"
import {
	Route,
	Routes
} from 'react-router-dom'

const AuthenticatedApp = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	)
}

export default AuthenticatedApp