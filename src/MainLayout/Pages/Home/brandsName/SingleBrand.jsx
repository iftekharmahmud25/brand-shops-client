import { Link } from "react-router-dom";


const SingleBrand = ({ singleBrand }) => {
    const { _id,image, name } = singleBrand;
    

    return (
        <>
            <Link to={`/brand/${_id}`}>
                <div className="group relative cursor-pointer">
                    <img
                        className="block w-[70%] mx-auto md:w-[450px] h-[250px] group-hover:brightness-50 rounded-md"
                        src={image}
                        alt="Shoes"
                    />
                    <div className="hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:block text-white text-5xl font-semibold p-2 text-center">
                        <h2 className="text-5xl font-semibold">{name}</h2>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default SingleBrand;
