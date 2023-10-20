
import { useData } from '../../../components/hook/DataContext';

const ProductDetails = () => {
    const { data } = useData();
    // { name, brand_name, type, price, rating, image, release_date, color_options, description }
    return (
        <div>
            <p>{data.name}</p>
            <img className='w-[400px]' src={data.image} alt="" />
            <p>{data.type}</p>
            <p>{data.brand_name}</p>
            <p>{data.release_date}</p>
            <p>{data.rating}</p>
            <p>{data.color_options}</p>
            <p>{data.description}</p>
            <p>${data.price}</p>
        </div>
    );
};

export default ProductDetails;