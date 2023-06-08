import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const Registration = () => {
    const [error, setError] = useState('');
    const { createUser, updateUserNameAndPhoto, } = useContext(AuthContext);



    const handleRegistration = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            setError('The password is less than 6 char')
            return;
        }

        createUser(email, password)
            .then(result => {
                updateUserNameAndPhoto(result.user, name, photo)
                    .then(() => {
                        console.log('updated user');
                    })
                    .catch(err => {
                        setError(err.message);
                    })

            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <div className="my-10">
            <div className="card mx-auto flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">

                <div className="card-body">
                    <h1 className="text-2xl text-center mt-4">Register</h1>
                    <form onSubmit={handleRegistration}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>

                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
                        </div>

                        <div className='mb-4'>
                            <span className='text-red-500'>{error}</span>
                        </div>

                        <div className='text-center'>
                            <button type='submit' className="btn text-xl capitalize bg-fuchsia-500 text-white hover:bg-fuchsia-600">Register</button>
                        </div>
                    </form>

                    <div className="divider">OR</div>

                    
                        <button className="btn capitalize border-gray-400 btn-outline hover:bg-transparent hover:text-inherit btn-ghost">
                            <FcGoogle className='mr-1 text-2xl' />
                            With Google</button>
                    

                    <div className='text-center'>
                        <span>Do you have an account? <Link className='btn-link capitalize' to="/login">Login</Link> </span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Registration;