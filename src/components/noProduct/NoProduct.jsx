import Lottie from 'lottie-react';
import noProductlottie from '../../../public/lottie/Animation - 1697747968286.json'

const NoProduct = () => {
    return (
        <div className='my-20'>
            <div>
                <Lottie className='w-72 mx-auto h-56' animationData={noProductlottie} loop={true}></Lottie>
            </div>
          
        </div>
    );
};

export default NoProduct;