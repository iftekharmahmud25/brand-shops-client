import subImage from '../../../../assets/low-poly-grid-haikei.svg'

const Subscribe = () => {
    const backgroundStyle = {
        backgroundImage: `url(${subImage})`, // Use subImage as the background image
      };

    return (
        <div className="hero h-[200px]" style={backgroundStyle} >
            <div className="hero-overlay "></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <p className="text-3xl font-semibold mb-3 text-white">Subscribe!!!</p>
                    <form className="flex justify-center gap-3">
                        <div className="">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your email"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-red-500"
                                required
                            />
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-red-800  to-red-500 hover:bg-gradient-to-r hover:from-red-500 hover:to-red-800 text-xl  px-4 py-2 rounded-md "
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Subscribe;