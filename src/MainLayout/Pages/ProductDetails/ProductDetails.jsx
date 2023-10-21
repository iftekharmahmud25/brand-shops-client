import { useContext } from 'react';
import { useData } from '../../../components/hook/DataContext';
import useTitle from '../../../components/hook/useTitle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../../components/Provider/AuthProvider';

const ProductDetails = () => {
  useTitle("Product details")
  const { data, setSharedData } = useData();
  const storedData = localStorage.getItem('sharedData');
  if (storedData && !data) {
    const parsedData = JSON.parse(storedData);
    setSharedData(parsedData);
  }
  const { user } = useContext(AuthContext)
  console.log(user.email)

  const handleAddToCart = async () => {
    try {
      const productToAdd = {
        name: data.name,
        price: data.price,
        type: data.type,
        brand_name: data.brand_name,
        rating: data.rating,
        image: data.image,
        release_date: data.release_date,
        color_options: data.color_options,
        description: data.description,
        user: user.email,

      };

      const response = await fetch('https://apple-server-drf5bpmol-iftekahr-mahmuds-projects.vercel.app/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productToAdd),
      });

      if (response.status === 201) {
        toast("Product added to cart successfully", { type: 'success' })
      } else {
        toast.error("Failed to add the product to the cart")
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
      toast.error("n error occurred while adding the product to the cart")
    }
  };


  return (
    <div className='mt-12'>
      <ToastContainer />
      <div className='md:flex lg:gap-20 mb-5'>
        <div className='md:w-[50%]'>
          {data?.image && <img className='lg:w-[100%] md:w-[70%] md:h-[260px] md:ms-16 w-[80%] mt-12 md:mt-0 mx-auto  md:mx-0 rounded-md' src={data?.image} alt="" />}
        </div>
        <div className='md:w-[50%] w-[80%] mx-auto'>
          <div className='flex justify-end'><button onClick={handleAddToCart} className='border border-red-800 flex gap-2 items-center text-red-800 px-1 py-1 rounded-md font-medium'> <img width="30" height="30" src="https://img.icons8.com/emoji/48/shopping-cart-emoji.png" alt="shopping-cart-emoji" /> Add to Cart</button></div>
          <div className='w-[100%]'>
            {data?.name && <p className='md:text-2xl text-xl font-semibold  mb-2 underline'> {data.name}</p>}
            {data?.price && <p className='text-base font-medium mb-2'>Price : ${data.price} only.</p>}
            {data?.release_date && <p className='text-base font-medium mb-2'>Release Date: {data.release_date}</p>}
            {data?.brand_name && <p className='text-base font-medium mb-2'>Brand: {data.brand_name}</p>}
            {data?.type && <p className='text-base font-medium mb-2'>Type: {data.type}</p>}
            {data?.rating && <p className='text-base font-medium mb-2'>Rating: {data.rating}</p>}
            {data?.color_options && <span className='text-base font-medium mb-2'>Color Choices : {data?.color_options && data.color_options.map((color, index) => <span className='me-2' key={index}>{index + 1}. {color}</span>)}</span>}
          </div>
        </div>
      </div>

      {data?.description && <p className='md:text-lg md:ms-16 text-lg  w-[90%] mx-auto font-base text-gray-700'><span className='font-semibold'>Description :</span> {data.description}</p>}
    </div>
  );
};

export default ProductDetails;

