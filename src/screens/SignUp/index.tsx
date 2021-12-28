import { useState } from 'react'
import './index.css'
import CustomInput from "@components/CustomInput";
import FancyBackground from "@components/FancyBackground";
import useAuth from '@hooks/useAuth';
import useUser from '@hooks/useUser';

const SignUp = () => {
	const { addUser } = useUser()
	const { signIn } = useAuth()
	const [login, setLogin] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [name, setName] = useState<string>('')
	const [age, setAge] = useState<number>(0)
	const [phone, setPhone] = useState<string>('')

	const [required, setRequired] = useState<boolean[]>([false, false, false, false, false, false])

	const signUp = () => {
		let requiredCopy = [false, false, false, false, false, false]
		if(login === '') requiredCopy[0] = true
		if(password === '') requiredCopy[1] = true
		if(email === '') requiredCopy[2] = true
		if(name === '') requiredCopy[3] = true
		if(age <= 0) requiredCopy[4] = true
		if(phone === '') requiredCopy[5] = true

		if(requiredCopy.reduce((acc, el) => acc || el, false)) {
			setRequired(requiredCopy)
			return
		}

		addUser({
			login,
			password,
			email,
			name,
			age,
			phone
		})
	}


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
					<CustomInput value={login} onChange={(e) => setLogin(e)} required={required[0]} />
				</div>
				<div
					className='sign-up__input-section'
				>
					<div
						className='sign-up__input-section__title'
					>
						password
					</div>
					<CustomInput value={password} onChange={(e) => setPassword(e)} type={'password'} required={required[1]} />
				</div>
				<div
					className='sign-up__input-section'
				>
					<div
						className='sign-up__input-section__title'
					>
						e-mail
					</div>
					<CustomInput value={email} onChange={(e) => setEmail(e)} type={'email'} required={required[2]} />
				</div>
				<div
					className='sign-up__input-section'
				>
					<div
						className='sign-up__input-section__title'
					>
						name
					</div>
					<CustomInput value={name} onChange={(e) => setName(e)} required={required[3]} />
				</div>
				<div
				className='sign-up__input-section'
				>
					<div
						className='sign-up__input-section__title'
					>
						age
					</div>
					<CustomInput value={`${age}`} onChange={(e) => setAge(parseInt(e))} type={'number'} required={required[4]} />
				</div>
				<div
					className='sign-up__input-section'
				>
					<div
						className='sign-up__input-section__title'
					>
						phone
					</div>
					<CustomInput value={phone} onChange={(e) => setPhone(e)} type={'tel'} required={required[5]} />
				</div>
				<button className={'sign-up__button'} onClick={() => signUp()}>
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