import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../../../assets/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../../components/Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    console.log(user)
    const navigate = useNavigate();
    const handleSignOut = () => {
        logOut()
            .then(() => {
                navigate('/')
                toast("You are successfully sign out");
            })
            .catch()
    }



    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-y-2">
                        <li className='bg-white'><Link className='' to='/'>Home</Link></li>
                       {user && <> <li>
                            <Link className='' to='/addProducts'>Add Products</Link>
                        </li>
                        <li> <Link className='' to='/cart'>My Cart</Link></li></>}
                    </ul>
                </div>
                <Link to='/'><div className='flex gap-2 items-center'>
                    <img width="70" height="70" className='hidden md:block animate-pulse' src="https://img.icons8.com/matisse/100/ipad-mini.png" alt="ipad-mini" />
                    <p className="text-red-700 md:text-xl  text-base font-bold">tech-Universe</p>
                </div></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex items-center px-1 gap-2">
                    <li>
                        <Link className='text-base font-semibold hover:font-bold text-red-700 hover:bg-white' to='/'>Home</Link>
                    </li>
                    {user && (
                        <>
                            <li>
                                <Link className='text-base font-semibold hover:font-bold text-red-700 hover:bg-white' to='/addProducts'>Add Products</Link>
                            </li>
                            <li>
                                <Link className='text-base font-semibold hover:font-bold text-red-700 hover:bg-white' to='/cart'>My Cart</Link>
                            </li>
                        </>
                    )}
                </ul>

            </div>
            <div className="navbar-end">
                {
                    user && <div className="flex items-center">
                        <p className="md:pe-3 pe-1"> <img className="rounded-full w-10 h-10" title={user.displayName} src={user.photoURL} alt="" /></p>
                    </div>
                }

                {
                    user ?
                        <button onClick={handleSignOut} className='bg-red-800 hover:shadow-xl text-white rounded-md md:px-2 md:py-0 px-2 py-2 text-xs md:text-base'>Sign Out</button>
                        :

                        <NavLink
                            className='bg-red-800 hover:shadow-xl text-white rounded-md md:px-2 md:py-0 px-2 py-2 text-xs md:text-base me-6' to="/login"
                        >
                            Login
                        </NavLink>

                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default Navbar;

