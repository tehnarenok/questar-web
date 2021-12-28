import { useState } from 'react'
import './index.css'

const SignIn = () => {
	const [login, setLogin] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	return (
		<div 
			className="sign-in"
		>
			<div 
				className="questar-logo sign-in__logo"
			/>
			<div
				className='sign-in__input-section'
			>
				<div
					className='sign-in__input-section__title'
				>
					login
				</div>
				<div 
					className='sign-in__input-section__input-container'
					onClick={() => setLogin('')}
				>
					<input 
						onClick={(e) => {
							e.preventDefault()
							e.stopPropagation()
						}}
						onChange={(e) => setLogin(e.target.value)}
						className='sign-in__input-section__input'
						value={login}
					/>
				</div>
			</div>
			<div
				className='sign-in__input-section'
			>
				<div
					className='sign-in__input-section__title'
				>
					password
				</div>
				<div 
					className='sign-in__input-section__input-container'
					onClick={() => setPassword('')}
				>
					<input 
						onClick={(e) => {
							e.preventDefault()
							e.stopPropagation()
						}}
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						className='sign-in__input-section__input'
					/>
				</div>
			</div>

			<a
				className='sign-in__forgot'
				href='/'
			>
				Forgot my password
			</a>

			<div
				className='sign-in__sign-up'
			>
				<div>
					<span>Don’t have an account?</span>
					<a
						href='/signup'
					>
						Sign up
					</a>
				</div>
			</div>
		</div>
	)
}

export default SignIn