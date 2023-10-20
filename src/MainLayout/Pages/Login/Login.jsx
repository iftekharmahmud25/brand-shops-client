import Lottie from 'lottie-react';
import loginLottie from '../../../../public/lottie/Animation - 1697693434508.json'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialButton from '../../Shared/SocialButton/SocialButton';
import useTitle from '../../../components/hook/useTitle';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../components/Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  useTitle("Login");
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [loginError, setLoginError] = useState(null);
  
  const handleLogin = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        toast('Login successful'); 
      })
      .catch((error) => {
        console.log(error)
        toast.error(error.message);
        setLoginError(error.message);

      });

}



  return (
    <div className="md:flex items-center justify-center gap-20 w-[80%] mx-auto ">
      <div className='md:w-[50%] w-[100%] '>
        <Lottie className='w-64 mx-auto h-40' animationData={loginLottie} loop={true}></Lottie>
      </div>
      <div className='md:w-[50%]'>
        <h1 className='text-center text-2xl font-bold pt-4'>Login now!!!</h1>
        <form onSubmit={handleLogin} className="">
          {/* email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold ps-[10%]">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered w-[80%] mx-auto"
            />
          </div>
          {/* password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold ps-[10%]">Password</span>
            </label>
            <input
              type='password'
              name="password"
              placeholder="password"
              className="input input-bordered w-[80%] mx-auto"
            />
          </div>
          {/* submit button */}
          <div className="form-control mt-6">
            <input
              className="bg-red-950 text-white w-[80%] mx-auto py-2 rounded-md"
              type="submit"
              value="Sign In"
            />
          </div>
        </form>
        {loginError && (
          <div className="text-center text-red-700 mt-4">{loginError}</div>
        )}
        <p className='text-center pt-4'>
          New here?
          <Link to="/signup">
            <span className="font-semibold">Create a New Account</span>
          </Link>
        </p>
        <SocialButton></SocialButton>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;