
import Banner from "../../Banner/Banner";
import ReviewSection from "./ReviewSection/ReviewSection";
import useTitle from "../../../components/hook/useTitle";
import BrandName from "./brandsName/BrandName";


const Home = () => {
        
    useTitle("Home");

    return (
        <div>
          
            <Banner></Banner>
            <BrandName></BrandName>
            <ReviewSection></ReviewSection>
        </div>
    );
};

export default Home;