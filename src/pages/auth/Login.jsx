import { useState } from 'react';
import { useFormik } from 'formik'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import * as yup from 'yup';
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import { useContext } from 'react';
import { authContext } from '../../context/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const [showPassword, setShowPassword] = useState(true);
    const [loginError, setLoginError] = useState("");
    const { loginUser, githubLoginUser, googleLogInUser } = useContext(authContext);

    const navigate = useNavigate()
    const location = useLocation();

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
            // user login process email and password using 

            loginUser(email, password)
                .then((userCredentail) => {
                    console.log(userCredentail.user);
                    Swal.fire(
                        'Logged In',
                        'You Are Logged In Successfully',
                        'success'
                    )
                    navigate(location?.state ? location.state : "/")
                })
                .catch((err) => {
                    setLoginError(err.message);
                    console.log(err.message)
                })

        }
    });


    // google login process
    const handleGoogleLogin = () => {
        googleLogInUser()
            .then((userCredential) => {
                console.log(userCredential.user);
                Swal.fire('Welcome', 'You are logged in successfully', 'success');
                navigate(location?.state ? location.state : "/")
            })
            .catch((error) => {
                console.log(error);
            });
    };
    // githubLogin process
    const handleGithubLogin = () => {
        githubLoginUser()
            .then((userCredential) => {
                console.log(userCredential.user);
                Swal.fire('Welcome', 'You are logged in successfully', 'success');
                navigate(location?.state ? location.state : "/")
            })
            .catch((error) => {
                console.log(error);
            });
    };


    return (
        <div className='max-w-6xl mx-auto '>
            <Header />
            <Navbar />
            <div className='flex  justify-center px-4 md:px-0'>
                <div className="w-full max-w-md p-4 bg-gray-300  rounded-md  sm:p-6 md:p-8 ">
                    <form className="space-y-6 " onSubmit={formik.handleSubmit}>
                        <h5 className="text-xl font-medium text-gray-900  text-center">Sign In </h5>
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
                        {/* social login start */}
                        <div className='flex flex-col sm:flex-row justify-center items-center '>
                            <button onClick={handleGithubLogin} type="button" className="text-white  bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                                <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
                                </svg>
                                Sign in with Github
                            </button>
                            <button onClick={handleGoogleLogin} type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                                <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                                    <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd" />
                                </svg>
                                Sign in with Google
                            </button>

                        </div>

                        {/* social login end */}

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