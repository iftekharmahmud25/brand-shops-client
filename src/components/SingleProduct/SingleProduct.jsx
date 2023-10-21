import { Link } from "react-router-dom";
import { useData } from "../hook/DataContext";


const SingleProduct = ({ singleProduct }) => {
    const { name, brand_name, type, price, rating, image, release_date, color_options, description } = singleProduct;
    const { setSharedData } = useData();

  const handleDetailsClick = () => {
    // Set the shared data
    setSharedData(singleProduct);
    localStorage.setItem('sharedData', JSON.stringify(singleProduct));
  };
    
    return (
        <div>
            <div className="md:flex items-center mb-12 ">
       {image && <img className="lg:w-[45%] md:w-[30%] w-[70%] mx-auto h-60 rounded-3xl md:mb-0 mb-3" src={image} alt="" />}
       <img className="md:block hidden" width="80" height="80" src="https://img.icons8.com/dotty/80/arrow--v2.png" alt="arrow--v2"/>
       <img className="block md:hidden mx-auto" width="50" height="50" src="https://img.icons8.com/ios/50/long-arrow-down.png" alt="long-arrow-down"/>
            <div className="bg-black text-white md:mt-0 mt-3 py-6 ps-8 md:w-[45%] w-[70%] mx-auto h-60 rounded-3xl ">
                {name && <p className="md:text-2xl text-xl font-semibold">{name}</p>}
                {brand_name && <p className="md:text-base text-sm">Brand Name : {brand_name}</p>}
                {type && <p className="md:text-base text-sm">Category : {type}</p>}
                {price && <p className="md:text-base text-sm">Price : {price}</p>}
                {rating && <p className="md:text-base text-sm">Ratings : {rating}</p>}
                <div>
                    <div className="flex justify-end mt-4">
                        {/* update */}
                   <Link > <img className="bg-white rounded-3xl w-8 me-6 "  src="https://img.icons8.com/ios/50/000000/refresh--v1.png" alt="update button"/></Link>
                    {/* details */}
                    <Link to={`details/${name}`} ><button onClick={handleDetailsClick}><img className="bg-white rounded-3xl me-6 w-8"  src="https://img.icons8.com/ios/50/000000/arrow--v1.png" alt="details button"/></button></Link>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="divider"></div>
        </div>
    );
};

export default SingleProduct;