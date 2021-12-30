import Home from "@screens/Home"
import {
	Route,
	Routes,
	Navigate
} from 'react-router-dom'
import QuestPage from "@screens/QuestPage";
import Question from "@screens/Question";
import Success from "@screens/Success";

const AuthenticatedApp = () => {
	return (
		<Routes>
			<Route path="/questpage" element={<QuestPage/>}/>
			<Route path="/question" element={<Question/>} />
			<Route path="/success" element={<Success/>} />
			<Route path="/" element={<Home />} />
			<Route path="*" element={<Navigate to='/' />} />
		</Routes>
	)
}

export default AuthenticatedApp