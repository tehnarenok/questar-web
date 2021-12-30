import { useState } from 'react'
import './index.css'
import CustomInput from "@components/CustomInput";
import useAuth from "@hooks/useAuth";
import Block from "@components/Block";
import useUser from '@hooks/useUser';

const SignIn = () => {
	const { checkUser } = useUser()
	const [login, setLogin] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [required, setRequired] = useState<boolean>(false)
	const { signIn } = useAuth()

	const handleLoginClick = () => {
		if(checkUser(login, password)) {
			setRequired(false)
		}
		setRequired(true)
	}

	return (
		<div>
			<Block>
				<div className="sign-in">
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
						<CustomInput value={login} onChange={(e) => setLogin(e)} required={required} />
					</div>
					<div
						className='sign-in__input-section'
					>
						<div
							className='sign-in__input-section__title'
						>
							password
						</div>
						<CustomInput value={password} onChange={(e) => setPassword(e)} type={'password'} required={required} />
					</div>

					<a
						className='sign-in__forgot'
						href='/'
					>
						Forgot my password
					</a>

					<button className={"sign-in__button"} onClick={() => handleLoginClick()}>Log In</button>

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
			</Block>
		</div>
	)
}

export default SignIn