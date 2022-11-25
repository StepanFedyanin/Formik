import logo from './logo.svg';
import './App.css';
import { ErrorMessage, Field, Form, Formik, useField } from 'formik';

function App() {

	return (

		<div className="App">
			<div className="App__container">
				<div className='Form__header'>
					<div className='Form__header--item'>
						<p className=''>Войти</p>
					</div>
				</div>
				<div className='Form__content'>
					<Formik
						initialValues={{ email: '', password: '' }}
						validate={values => {
							const errors = {};
							if (!values.email) {
								errors.email = 'Ошибка: введите почту';
							} else if (
								!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
							) {
								errors.email = 'Ошибка: неправильно заполнено поле';
							}
							if (!values.password) {
								errors.password = 'Ошибка: введите пароль';
							} else if (
								// !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.password)
								values.password == 123
							) {
								errors.password = 'Ошибка: неправильно заполнено поле';
							}
							return errors;
						}}
						onSubmit={(values, { setSubmitting }) => {
							setTimeout(() => {
								alert(JSON.stringify(values, null, 2));
								setSubmitting(false);
							}, 400);
						}}
						helperText=""
					>
						<Form >
							<div className='Form__item'>
								<label htmlFor="email" className='Form__item--lable'>Почта <span>*</span></label>
								<Field
									id="email"
									name="email"
									placeholder="jane@acme.com"
									type="email"
									className="Field--item"
								/>
								<div className="Form__item--error">
									<ErrorMessage name='email' />
								</div>
							</div>
							<div className='Form__item'>
								<label htmlFor="password" className='Form__item--lable'>Пароль <span>*</span></label>
								<Field
									id="password"
									name="password"
									type="password"
									className="Field--item"

								/>
								<div className="Form__item--error">
									<ErrorMessage name='password' />
								</div>
							</div>
							<div className='Form__submit'>
								<button className='Form__submit--btn' type="submit">Войти</button>
							</div>
						</Form>
					</Formik>
				</div>

			</div>
		</div>
	);
}

export default App;
