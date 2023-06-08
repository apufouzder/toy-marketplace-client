import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    return (
        <>
            <div className="bg-base-100">
                <div className="navbar container mx-auto">
                    <div className="navbar-start">

                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <Link to="/">Home</Link>
                                <Link to="/allToys"> All Toys</Link>
                                {
                                    user && <>
                                        <Link to="/myToys"> My Toys</Link>
                                        <Link to="/addToy"> Add A Toy</Link>
                                    </>
                                }
                                <Link to="/blog"> Blogs</Link>
                            </ul>
                        </div>

                        <Link to="/" className="btn btn-ghost normal-case font-bold text-xl">Paw<span className="text-fuchsia-500">Toys</span></Link>
                    </div>

                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu text-lg menu-horizontal gap-6 px-1">
                            <Link to="/">Home</Link>
                            <Link to="/allToys"> All Toys</Link>
                            {
                                user && <>
                                    <Link to="/myToys"> My Toys</Link>
                                    <Link to="/addToy"> Add A Toy</Link>
                                </>
                            }
                            <Link to="/blog"> Blogs</Link>
                        </ul>
                    </div>

                    <div className="navbar-end">

                        {
                            user ?
                                <>
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom capitalize" data-tip={`${user.displayName === null ? "Name not available" : user.displayName}`}>
                                        <div className="w-10 rounded-full">
                                            <img src={user.photoURL} alt="profile" />
                                        </div>
                                    </label>

                                    <button onClick={handleLogOut} className="btn text-xl capitalize bg-fuchsia-500 text-white hover:bg-fuchsia-600">Log Out</button>
                                </>
                                :
                                <Link to="/login">
                                    <button className="btn text-xl capitalize bg-fuchsia-500 text-white hover:bg-fuchsia-600">Login</button>
                                </Link>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;