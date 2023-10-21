import Banner from "../../Banner/Banner";
import ReviewSection from "./ReviewSection/ReviewSection";
import useTitle from "../../../components/hook/useTitle";
import BrandName from "./brandsName/BrandName";
import Subscribe from "./Subscribe/Subscribe";


const Home = () => {        
    useTitle("Home");

    return (
        <div>         
            <Banner></Banner>
            <div>
                <h1 className="text-center mt-10 mb-6 text-2xl font-semibold">--- Tech-Universe : Your Gateway to the World of Technology ---</h1>
                <p className="mb-20 text-gray-700 text-base w-[90%] text-center mx-auto">At Tech-Universe, explore leading brands and products from Apple, Samsung, Sony, Google, Intel, and Microsoft. Find high-res images, detailed specs, and expert descriptions. Create your tech wishlist and stay updated. Tech-Universe is your gateway to the ever-evolving world of tech.</p>
            </div>
            <BrandName></BrandName>
            <ReviewSection></ReviewSection>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;