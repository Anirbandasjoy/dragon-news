import { useState } from 'react';
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import * as yup from 'yup';
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import { useContext } from 'react';
import { authContext } from '../../context/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const [showPassword, setShowPassword] = useState(true);
    const [registerError, setRegisterError] = useState("");
    const { registerUser } = useContext(authContext);
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: ""
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().email().required(),
            password: yup.string().matches(
                /^(?=.*[A-Z])(?=.*\d).{6,}$/,
                "Password at least one uppercase one number and min 6 char"
            ).required()
        }),

        onSubmit: (values, { resetForm }) => {

            const { email, password, name } = values;
            // user registation
            registerUser(email, password)
                .then((userCredential) => {
                    console.log(userCredential.user);
                    Swal.fire(
                        'Thanks!',
                        'Registation process successfully!',
                        'success'
                    )
                })
                .catch((err) => {
                    setRegisterError(err.message)
                    console.log(err.message)
                })

        }
    });

    return (
        <div className='max-w-6xl mx-auto mb-10'>
            <Header />
            <Navbar />
            <div className='flex justify-center px-4 md:px-0'>
                <div className="w-full max-w-md p-4 bg-gray-300  rounded-md  sm:p-6 md:p-8 ">
                    <form className="space-y-6 " onSubmit={formik.handleSubmit}>
                        <h5 className="text-xl font-medium text-gray-900  text-center">Sign Up </h5>
                        <p className='text-center text-sm text-red-600'>
                            {
                                setRegisterError && registerError
                            }
                        </p>
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Your name</label>
                            <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="your email" onChange={formik.handleChange} value={formik.values.name} />
                            <span className="text-red-600 text-xs">{formik.touched.name ? formik.errors.name : ""}</span>
                        </div>
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
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Register </button>

                        <div className="text-sm font-medium text-gray-500 ">
                            Already registered? please <Link to="/login" className="text-blue-700 hover:underline ">Login</Link>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register