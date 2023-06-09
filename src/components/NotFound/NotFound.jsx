import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <div className="container mx-auto mt-10">
            <div className="text-center">
            <Link to="/"><button className="btn mb-4 btn-outline">Back to home</button></Link>
            </div>
            <img className="w-1/2 mx-auto" src="https://lh6.googleusercontent.com/Bu-pRqU_tWZV7O3rJ5nV1P6NjqFnnAs8kVLC5VGz_Kf7ws0nDUXoGTc7pP87tyUCfu8VyXi0YviIm7CxAISDr2lJSwWwXQxxz98qxVfMcKTJfLPqbcfhn-QEeOowjrlwX1LYDFJN" alt="404" />
        </div>
    );
};

export default NotFound;