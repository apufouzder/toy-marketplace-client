import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import swal from "sweetalert";
import { Link } from "react-router-dom";

const MyToys = () => {
    document.title = "Paw Toys | My toy";
    const [myToys, setMyToys] = useState([]);
    const [sortOrder, setSortOrder] = useState('desc');
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:4000/addToy?email=${user?.email}&sort=${sortOrder}`)
            .then(res => res.json())
            .then(data => setMyToys(data));
    }, [sortOrder]);

    const handleDelete = id => {
        fetch(`http://localhost:4000/toy/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    swal("Good job!", "Delete Successfully!", "success");
                    const remaining = myToys.filter(toy => toy._id !== id);
                    setMyToys(remaining);
                }
            });
    };

    const handleSortChange = event => {
        setSortOrder(event.target.value);
    };


    return (
        <div className="overflow-x-auto container mx-auto">
            <div className="mb-4">
                <label className="mr-2">Sort By Price:</label>
                <select value={sortOrder} onChange={handleSortChange}>
                    <option value="desc">Descending</option>
                    <option value="asc">Ascending</option>
                </select>
            </div>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Toy Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Rating</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {myToys.map(toy => (
                        <tr key={toy._id}>
                            <td>
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={toy.photo} alt="photo" />
                                </div>
                            </td>
                            <td>
                                <div className="font-bold">{toy.name}</div>
                            </td>
                            <td>{toy.sub_category}</td>
                            <td>${toy.price}</td>
                            <td>{toy.quantity}</td>
                            <td>{toy.rating}</td>
                            <th>
                                <button
                                    onClick={() => handleDelete(toy._id)}
                                    className="btn badge-error mr-1 btn-xs"
                                >
                                    Delete
                                </button>
                                <button
                                    // onClick={() => handleUpdate(toy)}
                                    className="btn badge-success btn-xs"
                                >
                                    <Link to={`/toyUpdate/${toy._id}`}> Update</Link>
                                </button>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;