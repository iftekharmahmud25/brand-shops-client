import { useState } from 'react';
import addProductlottie from '../../../../public/lottie/Animation - 1697789429973.json'
import Lottie from 'lottie-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../../components/hook/useTitle';

const AddProducts = () => {
   useTitle("Add Product")

    const [productData, setProductData] = useState({
        image: '',
        name: '',
        brand_name: '',
        type: '',
        price: 0,
        description: '',
        rating: 0,
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:5000/brands/${productData.brand_name}/products`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productData),
            });

            if (response.status === 200) {
                // Product was added successfully
                setProductData({
                    image: '',
                    name: '',
                    brand_name: '',
                    type: '',
                    price: 0,
                    description: '',
                    rating: 0,
                });
                setErrorMessage('');
                toast('New product added successfully', { type: 'success' });
            } else {
                const data = await response.json();
                setErrorMessage(data.message);
            }
        } catch (error) {
            console.error('An error occurred while adding the product.', error);
            setErrorMessage('An error occurred. Please try again.');
        }
    };
   





    return (
        <div className='md:flex items-start'>
        
            <div className='md:w-[50%] w-[80%] mx-auto md:mt-20'>
                <Lottie className='w-[100%] h-[100%] md:w-72 mx-auto ' animationData={addProductlottie} loop={true}></Lottie>
            </div>
            <div className='md:w-[50%]  w-[80%] md:text-justify mx-auto'>
                <h2 className='my-7 text-xl font-semibold'>Add Product</h2>
                <form onSubmit={handleSubmit}>

                    <div className="form-control mb-2">
                        <label className="label">
                            <span className="label-text font-semibold ms-[10%] md:ms-0">Product Image:</span>
                        </label>

                        <input
                            type="text"
                            name="image"
                            value={productData.image}
                            required
                            onChange={handleInputChange}
                            className="input input-bordered md:w-[70%] md:ms-0 w-[80%] mx-auto"
                        />

                    </div>
                    <div className="form-control mb-2">
                        <label className="label">
                            <span className="label-text font-semibold ms-[10%] md:ms-0">Product Name:</span>
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={productData.name}
                            required
                            className="input input-bordered md:w-[70%] md:ms-0 w-[80%] mx-auto"
                            onChange={handleInputChange}
                        />

                    </div>
                    <div className="form-control mb-2">
                        <label className="label">
                            <span className="label-text font-semibold ms-[10%] md:ms-0">Brand Name:</span>
                        </label>

                        <select
                            name="brand_name"
                            required
                            className="input input-bordered md:w-[70%] md:ms-0 w-[80%] mx-auto"
                            value={productData.brand_name}
                            onChange={handleInputChange}
                        >
                            <option value="">Select a Brand</option>
                            <option value="Apple">Apple</option>
                            <option value="Samsung">Samsung</option>
                            <option value="Sony">Sony</option>
                            <option value="Google">Google</option>
                            <option value="Intel">Intel</option>
                            <option value="Microsoft">Microsoft</option>
                        </select>
                    </div>

                    <div className="form-control mb-2">
                        <label className="label">
                            <span className="label-text font-semibold ms-[10%] md:ms-0">Product Type:</span>
                        </label>

                        <input
                            type="text"
                            name="type"
                            required
                            value={productData.type}
                            className="input input-bordered md:w-[70%] md:ms-0 w-[80%] mx-auto"
                            onChange={handleInputChange}
                        />

                    </div>
                    <div className="form-control mb-2">
                        <label className="label">
                            <span className="label-text font-semibold ms-[10%] md:ms-0">Price: $</span>
                        </label>
                        <input
                            type="number"
                            name="price"
                            required
                            className="input input-bordered md:w-[70%] md:ms-0 w-[80%] mx-auto"
                            value={productData.price}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-control mb-2">
                        <label className="label">
                            <span className="label-text font-semibold ms-[10%] md:ms-0">Description:</span>
                        </label>
                        <textarea
                            name="description"
                            required
                            className="input input-bordered md:w-[70%] md:ms-0 w-[80%] mx-auto"
                            value={productData.description}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-control mb-2">
                        <label className="label">
                            <span className="label-text font-semibold ms-[10%] md:ms-0">Rating:</span>
                        </label>
                        <input
                            type="number"
                            name="rating"
                            required
                            className="input input-bordered md:w-[70%] md:ms-0 w-[80%] mx-auto"
                            value={productData.rating}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button className="bg-red-950 text-white md:w-[70%] ms-[10%] mt-2 md:ms-0 w-[80%] mx-auto py-2 rounded-md" type="submit">Add Product</button>
                </form>
                {errorMessage && <p>{errorMessage}</p>}
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddProducts;




