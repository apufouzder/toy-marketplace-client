import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const AllToys = () => {
    document.title = "Paw Toys | All toy";
    const allToys = useLoaderData();
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [limit, setLimit] = useState(20);


    const handleSearch = () => {
        const results = allToys.filter(toy => toy.name.toLowerCase().includes(searchQuery.toLowerCase()));
        setSearchResults(results);
    };

    return (
        <div className="overflow-x-auto mt-8 container mx-auto">
            <input
                type="text"
                placeholder="Search by Toy Name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyUp={handleSearch}
                className="input input-bordered w-full mb-3 max-w-xs"
            />
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
                        (searchQuery ? searchResults : allToys.slice(0, limit)).map(toy => (
                            <tr key={toy._id} className="text-lg">
                                <td>{toy.seller_name}</td>
                                <td>{toy.name}</td>
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
            {searchQuery ? null : (
                <button
                    className="btn mt-4"
                    onClick={() => setLimit(prevLimit => prevLimit + 20)}
                >
                    Load More
                </button>
            )}
        </div>
    );
};

export default AllToys;