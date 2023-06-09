import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import swal from "sweetalert";



const AddToy = () => {
    const {user} = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const seller_name = form.seller_name.value;
        const seller_email = form.seller_email.value;
        const sub_category = form.sub_category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const photo = form.photo.value;

        // const email = user?.email;
        const addToy = {
            name,
            seller_name,
            seller_email,
            sub_category,
            price,
            rating,
            quantity,
            description,
            photo
        }

        fetch('http://localhost:4000/addToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    swal("Good job!", "Added Successfully!", "success");
                    form.reset();
                }
            })
    }

    return (
        <div className="my-10">
            <div className="card mx-auto flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">

                <div className="card-body">
                    <h1 className="text-2xl text-center mt-4">Add a new toy</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="text" defaultValue={user?.displayName} name="seller_name" placeholder="name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <input type="email" defaultValue={user?.email} name="seller_email" placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Sub category</span>
                            </label>
                            <input type="text" name="sub_category" placeholder="Dog toys, etc" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" name="price" placeholder="Price" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="number" name="quantity" placeholder="Quantity" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea placeholder="Description" name="description" className="textarea textarea-bordered textarea-sm w-full max-w-lg" ></textarea>
                        </div>

                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
                        </div>

                        <div className='text-center'>
                            <button type='submit' className="btn text-xl capitalize bg-fuchsia-500 text-white hover:bg-fuchsia-600">Submit</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddToy;