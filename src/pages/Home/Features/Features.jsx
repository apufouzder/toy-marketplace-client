import 'aos/dist/aos.css';
import Aos from "aos";
import { useEffect } from 'react';

const Features = () => {
    useEffect(() => {
        Aos.init({
            duration: '2000'
        });
    }, [])
    return (
        <div data-aos="zoom-in-up" className="my-28">
            <div className="hero" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1556012018-50c5c0da73bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80")` }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content  py-20 text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Interactive Cat Wand Toy with Feather</h1>
                        <p className="mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sit perferendis, libero iste tenetur fugit hic ipsa harum!</p>
                        <button className="btn ">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;