/* eslint-disable react/prop-types */
import { useLoaderData, useNavigate } from "react-router-dom";
import swal from "sweetalert";


const UpdateToyForm = () => {
    document.title = "Paw Toys | Update toy";
    const loadToy = useLoaderData();
    const navigate = useNavigate();


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const updateData = { price, quantity, description }


        fetch(`http://localhost:4000/toy/${loadToy._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                   
                    swal("Good job!", "Update Successful!", "success");
                    navigate("/myToys", { replace: true })
                }
            })
    };
    return (
        <div className="card mx-auto flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
            <div className="card-body">
                <h2>Update Toy</h2>
                <form onSubmit={handleSubmit}>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input
                            defaultValue={loadToy.price}
                             type="number" name="price" placeholder="Price" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input
                            defaultValue={loadToy.quantity}
                            type="number" name="quantity" placeholder="Quantity" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea
                            defaultValue={loadToy.description}
                             placeholder="Description" name="description" className="textarea textarea-bordered textarea-sm w-full max-w-lg" />
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="btn btn-primary">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateToyForm;