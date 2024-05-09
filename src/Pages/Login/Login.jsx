import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {

    // const { singIn } = UseAuth();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
    const location = useLocation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { email, password } = data;

        // console.log(data);

        // singIn(email, password)
        //     .then(result => {
        //         const loggedInUser = result.user;
        //         const user = { email };
        //         toast.success('Congrs! Login Sucessfull');
        //         navigate(location?.state ? location.state : '/');

        //         axios.post('https://y-mauve-eight.vercel.app/jwt', user, { withCredentials: true })
        //             .then(res => {
        //                 // console.log(res.data);
        //                 if (res.data.success) {
        //                     navigate(location?.state ? location.state : '/');
        //                 }
        //             })
        //     })
        //     .catch(error => {
        //         const errorText = error.message;
        //         const errorMessage = errorText.slice(22, 40);
        //         toast.error(`${errorMessage}`)
        //     });
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="w-full md:w-8/12 mx-auto rounded-3xl py-20">
            <div className="w-4/6 mx-auto rounded-xl overflow-hidden flex flex-col md:flex-row justify-between items-center shadow-2xl bg-base-100">
                <div className="flex-1">
                    <div className="card shrink-0 w-full max-w-lg p-10 ">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <p className="">Welcome Back</p>
                                <h1 className="text-5xl font-bold">Log In</h1>
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter Your Email"
                                    className="input input-bordered"

                                    {...register("email", { required: true })}
                                />
                                {errors.email && <span className="text-xs text-red-500">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative input input-bordered flex items-center">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="Enter Your Password"
                                        className="w-4/5"
                                        {...register("password", { required: true })}
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute inset-y-0 right-4 flex items-center"
                                    >
                                        {showPassword ? <FaRegEyeSlash className="h-6 w-6 text-gray-500" /> : <FaRegEye className="h-6 w-6 text-gray-500" />}
                                    </button>
                                </div>
                                {errors.password && <span className="text-xs text-red-500">Password is required</span>}
                            </div>
                            <div className="form-control pt-5">
                                <button className="btn w-full bg-[#d01818] hover:bg-[#0d1637] text-white text-xl font-bold">Login</button>

                            </div>
                            <h3 className="text-center pt-3">Need an account? <Link to="/register" className="text-blue-600 hover:text-[#d01818] font-bold">Create Account</Link></h3>
                        </form>

                    </div>
                </div>

                <div className="flex-1">
                    <img src='https://images.pexels.com/photos/1251834/pexels-photo-1251834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;