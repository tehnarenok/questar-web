import { useState } from 'react'
import './index.css'
import CustomInput from "@components/CustomInput";
import useAuth from "@hooks/useAuth";
import Block from "@components/Block";
import FancyBackground from "@components/FancyBackground";

const SignIn = () => {
	const [login, setLogin] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const { signIn } = useAuth()

	return (
		<div>
			<FancyBackground className={"fancy-background__fullWidth"}/>
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
						<CustomInput value={login} onChange={(e) => setLogin(e)} />
					</div>
					<div
						className='sign-in__input-section'
					>
						<div
							className='sign-in__input-section__title'
						>
							password
						</div>
						<CustomInput value={password} onChange={(e) => setPassword(e)} type={'password'} />
					</div>

					<a
						className='sign-in__forgot'
						href='/'
					>
						Forgot my password
					</a>

					<button className={"sign-in__button"} onClick={() => signIn(login)}>Log In</button>

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