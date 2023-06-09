import { useLoaderData } from "react-router-dom";


const ToyDetails = () => {
    document.title = "Paw Toys | Toy Details";
    const toy = useLoaderData();

    return (
        <div className="card max-w-3xl mx-auto mt-16 bg-base-100 shadow-md">
            <figure><img className="h-72" src={toy.photo} alt="Toy" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {toy.name}
                </h2>
                <div className="text-lg">
                    <h3>Seller Name: {toy.seller_name}</h3>
                    <h3>Seller Email: {toy.seller_email}</h3>
                </div>

                <div className="stats stats-vertical lg:stats-horizontal shadow">
                    <div className="stat">
                        <div className="stat-title text-lg">Price</div>
                        <div className="">${ toy.price}</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title text-lg">Quantity</div>
                        <div className="">{toy.quantity}</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title text-lg">Rating</div>
                        <div className="">{toy.rating}</div>
                    </div>
                </div>

                <p>{toy.description}</p>
            </div>
        </div>
    );
};

export default ToyDetails;