import BannerSection from "../BannerSection/BannerSection";
import BlogSection from "../BlogSection/BlogSection";
import Features from "../Features/Features";
import GallerySection from "../GallerySection/GallerySection";
import ShopByCategory from "../ShopByCategory/ShopByCategory";


const Home = () => {
    return (
        <div className="container mx-auto">
            <BannerSection />
            <ShopByCategory />
            <Features />
            <GallerySection />
            <BlogSection />
        </div>
    );
};

export default Home;