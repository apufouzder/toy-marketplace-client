

const BannerSection = () => {
    return (
        <>
            <div className="hero container-fu bg-[url('https://cdn.shopify.com/s/files/1/2713/8608/files/slider1_33f85adb-b087-4414-bb40-b1594587606e_1.png?v=1674543129')]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg py-36">
                        <h1 className="mb-6 text-5xl font-bold">Today Special Edition!</h1>
                        <p className="mb-6 text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem odit fugit cum in recusandae iure dolore libero eos?</p>
                        <button className="btn bg-fuchsia-500 text-white hover:bg-fuchsia-600 border-0">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerSection;