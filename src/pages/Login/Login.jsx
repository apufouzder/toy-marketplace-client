/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';


const Login = () => {
    const [error, setError] = useState('');
    const { signIn, googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
            }).catch((error) => {
                setError(error.message);
            });
    }


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <div className="my-10">
            <div className="card mx-auto flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                <div className="card-body">
                    <h1 className="text-2xl text-center mt-4">Login Now</h1>
                    <form onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className='mb-4'>
                            <span className='text-red-500'>{error}</span>
                        </div>
                        <div className='text-center'>
                            <button type='submit' className="btn text-xl capitalize bg-fuchsia-500 text-white hover:bg-fuchsia-600">Login</button>
                        </div>
                    </form>

                    <div className="divider">OR</div>

                    <button onClick={handleGoogleSignIn} className="btn capitalize border-gray-400 btn-outline hover:bg-transparent hover:text-inherit btn-ghost">
                        <FcGoogle className='mr-1 text-2xl' />
                        With Google</button>

                    <div className='text-center'>
                        <span>Don't have any account? <Link className='btn-link capitalize' to="/register">Register</Link> </span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;