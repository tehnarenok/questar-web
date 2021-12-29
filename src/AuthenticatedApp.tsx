import Home from "@screens/Home"
import {
	Route,
	Routes,
	Navigate
} from 'react-router-dom'
import QuestPage from "@screens/QuestPage";

const AuthenticatedApp = () => {
	return (
		<Routes>
			<Route path="/questpage" element={<QuestPage/>}/>
			<Route path="/" element={<Home />} />
			<Route path="*" element={<Navigate to='/' />} />
		</Routes>
	)
}

export default AuthenticatedApp