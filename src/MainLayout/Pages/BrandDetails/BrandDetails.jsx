import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLoaderData } from "react-router-dom";
import NoProduct from "../../../components/noProduct/NoProduct"; 
import SingleProduct from "../../../components/SingleProduct/SingleProduct";

const BrandDetails = () => {
    const brandDetailsInfo = useLoaderData();
    const { advertisement_images, products } = brandDetailsInfo;

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 1000,
        adaptiveHeight: true,
    };

    return (
        <div className="w-[90%] md:w-full mx-auto">
            <Slider {...sliderSettings} className="">
                {advertisement_images.map((image, index) => (
                    <div key={index}>
                        <img className="w-full md:h-[330px] h-[280px]" src={image} alt={`Advertisement ${index}`} />
                    </div>
                ))}
            </Slider>

            <div>
                {products.length < 1 ? (
                    <><NoProduct></NoProduct></>
                ) : (
                    <><div className="my-20 w-full ">
                        {
                            products?.map((singleProduct)=><SingleProduct key={singleProduct.name} singleProduct={singleProduct}></SingleProduct>)
                        }
                        
                        </div>
                        
                        </>
                )}
            </div>

        </div>
    );
};

export default BrandDetails;


