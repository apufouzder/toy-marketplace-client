import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const ShopByCategory = () => {
    const [allToys, setAllToys] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/addToy')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])
    console.log(allToys);
    return (
        <div className="mt-20">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold mb-4">Toys By <span className="text-fuchsia-500">Category</span></h1>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Dog Toys</Tab>
                    <Tab>Cat Toys</Tab>
                    <Tab>Bird Toys</Tab>
                </TabList>
                <TabPanel>
                    <div className="grid grid-cols-3">
                        {allToys
                            .filter((toy) => toy.sub_category === 'dog')
                            .map((toy) => (
                                <div key={toy.id} className="card card-compact w-72 bg-base-100 shadow-xl">
                                    <figure><img src={toy.photo} alt={toy.name} /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{toy.name}</h2>
                                        <p>Price: ${toy.price}</p>
                                        <p>Rating: {toy.rating}</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-md">
                                                <Link to={`/toy/${toy._id}`}> View details</Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-3">
                        {allToys
                            .filter((toy) => toy.sub_category === 'cat')
                            .map((toy) => (
                                <div key={toy.id} className="card card-compact w-72 bg-base-100 shadow-xl">
                                    <figure><img src={toy.photo} alt={toy.name} /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{toy.name}</h2>
                                        <p>Price: ${toy.price}</p>
                                        <p>Rating: {toy.rating}</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-md">
                                                <Link to={`/toy/${toy._id}`}> View details</Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-3">
                        {allToys
                            .filter((toy) => toy.sub_category === 'bird')
                            .map((toy) => (
                                <div key={toy.id} className="card card-compact w-72 bg-base-100 shadow-xl">
                                    <figure><img src={toy.photo} alt={toy.name} /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{toy.name}</h2>
                                        <p>Price: ${toy.price}</p>
                                        <p>Rating: {toy.rating}</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-md">
                                                <Link to={`/toy/${toy._id}`}> View details</Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;