import { useState } from 'react';
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import * as yup from 'yup';
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';

const Login = () => {
    const [showPassword, setShowPassword] = useState(true);
    const [loginError, setLoginError] = useState("");
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: yup.object({
            email: yup.string().email().required(),
            password: yup.string().matches(
                /^(?=.*[A-Z])(?=.*\d).{6,}$/,
                "Password at least one uppercase one number and min 6 char"
            ).required()
        }),

        onSubmit: (values, { resetForm }) => {

            const { email, password } = values;
            console.log(email, password)
        }
    });

    return (
        <div className='max-w-6xl mx-auto '>
            <Header />
            <Navbar />
            <div className='flex  justify-center px-4 md:px-0'>
                <div className="w-full max-w-md p-4 bg-gray-300  rounded-md  sm:p-6 md:p-8 ">
                    <form className="space-y-6 " onSubmit={formik.handleSubmit}>
                        <h5 className="text-xl font-medium text-gray-900  text-center">Sign Up </h5>
                        <p className='text-center text-sm text-red-600'>
                            {
                                setLoginError && loginError
                            }
                        </p>

                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                            <input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="your email" onChange={formik.handleChange} value={formik.values.email} />
                            <span className="text-red-600 text-xs">{formik.touched.email ? formik.errors.email : ""}</span>
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                            <div className='relative'>
                                <input type={showPassword ? "password" : "text"} name="password" id="password" placeholder="your password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " onChange={formik.handleChange} value={formik.values.password} />
                                <span onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <AiOutlineEyeInvisible size={23} className='absolute right-4 bottom-2 cursor-pointer' /> : <AiOutlineEye size={23} className='absolute right-4 bottom-2 cursor-pointer' />
                                    }
                                </span>
                            </div>
                            <span className="text-red-600 text-xs">{formik.touched.password ? formik.errors.password : ""}</span>
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 " required />
                                </div>
                                <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 ">Remember me</label>
                            </div>

                        </div>
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Login </button>

                        <div className="text-sm font-medium text-gray-500 ">
                            Not Registerd? please <Link to="/register" className="text-blue-700 hover:underline ">Register</Link>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login