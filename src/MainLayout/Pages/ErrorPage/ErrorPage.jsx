import Lottie from 'lottie-react';
import errorLottie from '../../../../public/lottie/Animation - 1697892709561.json'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="w-full text-center">
            <Lottie className="mx-auto w-1/2" animationData={errorLottie} loop={true}></Lottie>
            <Link to='/'><button className='bg-black rounded-md text-white px-1 py-2 '>Back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;