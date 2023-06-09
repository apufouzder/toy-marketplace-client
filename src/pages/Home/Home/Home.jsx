import BannerSection from "../BannerSection/BannerSection";
import BlogSection from "../BlogSection/BlogSection";
import ShopByCategory from "../ShopByCategory/ShopByCategory";


const Home = () => {
    return (
        <div className="container mx-auto">
            <BannerSection />
            <ShopByCategory />
            <BlogSection />
        </div>
    );
};

export default Home;