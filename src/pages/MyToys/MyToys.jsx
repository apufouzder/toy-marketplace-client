/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import swal from "sweetalert";

const toyData = () => {
    const [myToys, setMyToys] = useState([]);
    const { user } = useContext(AuthContext);
  
    useEffect(() => {
      fetch(`http://localhost:4000/addToy?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setMyToys(data));
    }, []);
  
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
  
    return (
      <div className="overflow-x-auto container mx-auto">
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
                    className="btn btn-ghost btn-xs"
                  >
                    Delete
                  </button>
                  <button className="btn btn-ghost btn-xs">Update</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default toyData;