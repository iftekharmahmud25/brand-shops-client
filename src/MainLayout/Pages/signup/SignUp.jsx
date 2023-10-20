import Lottie from 'lottie-react';
import signupLottie from '../../../../public/lottie/Animation - 1697711050769.json'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialButton from '../../Shared/SocialButton/SocialButton';
import useTitle from '../../../components/hook/useTitle';
import { useContext} from 'react';
import { AuthContext } from '../../../components/Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    useTitle("Sign Up");
    const { createUser,updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    const from = location.state?.from || "/"
    

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password,photoURL)
        if (password.length < 6) {
            return toast('Password should be at least 6 characters or longer')
          } else if (!/[A-Z]/.test(password)) {
            return toast('Your password should have at least one uppercase letter (A-Z)')
          } else if (!/[!@#$%^&*]/.test(password)) {
            return toast('Your password should have at least one special character')
          }
          createUser(email, password)
          .then((result) => {
            const user = result.user;
            console.log(user);
            
             
            fetch('http://localhost:5000/users',{
            //fetch('https://apple-server-80zq1e59s-iftekahr-mahmuds-projects.vercel.app/users',{
                  method : 'POST',
                  headers :{
                     'content-type' : 'application/json'
                  },
                  body : JSON.stringify(user)
             })
             .then(res => res.json())
             .then(data =>{ 
                console.log(data)
                
                if(data.insertedId)
                 {  
                    updateUserProfile(name, photoURL)
                    navigate(from, { replace: true });  
                    return toast('user has been created successfully')
                   
                 }
             })
          })
          .catch(error =>{
            console.log(error)
       })
    }


    return (
        <div className='md:flex justify-center items-center gap-20 w-[80%] mx-auto'>
            <div className='md:w-[50%] w-[100%] '>
                <Lottie className='w-[50%] h-[50%] md:w-72 mx-auto ' animationData={signupLottie} loop={true}></Lottie>
            </div>
            <div className='md:w-[50%]'>
                <h1 className='text-center text-2xl font-bold pt-4'>Sign Up now!!!</h1>
                <form onSubmit={handleSignUp} >
                    {/* name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold ps-[10%]">Name</span>
                        </label>
                        <input
                            type="name"
                            name="name"
                            placeholder="Your Name"
                            className="input input-bordered w-[80%] mx-auto"
                        />
                    </div>
                    {/* photo */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold ps-[10%]">Image URL</span>
                        </label>
                        <input
                            type="photoURL"
                            name="photoURL"
                            placeholder="Your Image URL"
                            className="input input-bordered w-[80%] mx-auto"
                        />
                    </div>
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
                            value="Sign Up"
                        />
                    </div>
                </form>
                <p className='text-center pt-4'>
                    Already have an account?
                    <Link to="/login">
                        <span className="font-semibold">Login</span>
                    </Link>
                </p>
                <SocialButton></SocialButton>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignUp;