import { Link, useLoaderData } from "react-router-dom";


const AllToys = () => {
    const allToys = useLoaderData();

    return (
        <div className="overflow-x-auto container mx-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className="text-lg">
                        <th>Seller Name</th>
                        <th>Toy Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allToys.map(toy => (
                            <tr key={toy._id} className="text-lg">
                                <td>{ toy.seller_name}</td>
                                <td>{ toy.name}</td>
                                <td>{toy.sub_category}</td>
                                <td>${toy.price}</td>
                                <td>{toy.quantity}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">
                                        <Link to={`/toy/${toy._id}`}> View details</Link>
                                    </button>
                                </th>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllToys;