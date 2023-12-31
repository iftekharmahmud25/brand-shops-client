import { useEffect, useState } from "react";
import SingleBrand from "./SingleBrand";



const BrandName = () => {
    
    const [brands, setBrands]=useState([])
    useEffect(()=>{
      
        fetch('https://apple-server-ruby.vercel.app/services')
        .then((res)=>res.json())
        .then(data=>{
            setBrands(data)
        })
    },[])
    return (
        <div className="md:w-[90%] lg:w-full mx-auto">
           
            <div className="grid md:grid-cols-2 grid-cols-1 gap-20">
                {brands?.map((singleBrand=>
                    <SingleBrand key={singleBrand._id} singleBrand={singleBrand}></SingleBrand>
                    ))}
            </div>
        </div>
    );
};

export default BrandName;