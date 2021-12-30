import AuthApp from '@components/AuthApp'
import SignIn from '@screens/SignIn'
import SignUp from '@screens/SignUp'
import { Navigate, Route, Routes } from 'react-router-dom'
import AuthenticatedApp from './AuthenticatedApp'
import QuestPage from "@screens/QuestPage";
import Question from "@screens/Question";

function GuestRoutes() {
	return (
		<Routes>
			<Route path="/signin" element={<SignIn />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path='*' element={<Navigate to='/signin' />} />
		</Routes>
	)
}

function App() {
	return (
			<div>
				{/* <Suspense fallback={<Loader size="lg" center />}> */}
				<AuthApp fallback={<GuestRoutes />}>
					<AuthenticatedApp />
				</AuthApp>
					
				{/* </Suspense> */}
			</div>
	)
}

export default App
