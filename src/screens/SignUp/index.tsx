import { useState } from 'react'
import './index.css'
import CustomInput from "@components/CustomInput";
import FancyBackground from "@components/FancyBackground";

const SignUp = () => {

	const [login, setLogin] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [name, setName] = useState<string>('')
	const [age, setAge] = useState<number>(0)
	const [phone, setPhone] = useState<string>('')
	return (
		<div>
			<FancyBackground className={"fancy-background__fullWidth"}/>
			<div className='sign-up'>
				<div className='sign-up__plus-icon'/>
				<div
					className='sign-up__input-section'
				>
					<div
						className='sign-up__input-section__title'
					>
						login
					</div>
					<CustomInput value={login} onChange={(e) => setLogin(e)} />
				</div>
				<div
					className='sign-up__input-section'
				>
					<div
						className='sign-up__input-section__title'
					>
						password
					</div>
					<CustomInput value={password} onChange={(e) => setPassword(e)} type={'password'} />
				</div>
				<div
					className='sign-up__input-section'
				>
					<div
						className='sign-up__input-section__title'
					>
						e-mail
					</div>
					<CustomInput value={email} onChange={(e) => setEmail(e)} type={'email'} />
				</div>
				<div
					className='sign-up__input-section'
				>
					<div
						className='sign-up__input-section__title'
					>
						name
					</div>
					<CustomInput value={name} onChange={(e) => setName(e)} />
				</div>
				<div
				className='sign-up__input-section'
				>
					<div
						className='sign-up__input-section__title'
					>
						age
					</div>
					<CustomInput value={`${age}`} onChange={(e) => setAge(parseInt(e))} type={'number'} />
				</div>
				<div
					className='sign-up__input-section'
				>
					<div
						className='sign-up__input-section__title'
					>
						phone
					</div>
					<CustomInput value={phone} onChange={(e) => setPhone(e)} type={'tel'} />
				</div>
				<button className={'sign-up__button'}>
					Create account
				</button>
				<div className={'sign-up__sign-in'}>
					<div>
						<span>Back to</span>
						<a href='/signin'>
							Log in
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SignUp