
const blogs = [
    {
        "id": 1,
        "title": "Stuffed Bear",
        "author": "Toy Company A",
        "publicationDate": "2022-03-15",
        "content": "This adorable stuffed bear is perfect for cuddling and playing. It's made with soft and durable materials, ensuring hours of fun for kids of all ages.",
        "image": "https://nypost.com/wp-content/uploads/sites/2/2021/08/dog-toys.jpg?quality=75&strip=all&w=1024"
    },
    {
        "id": 2,
        "title": "Building Blocks Set",
        "author": "Toy Company B",
        "publicationDate": "2022-06-02",
        "content": "Let your child's imagination soar with this building blocks set. It includes various shapes and colors that can be stacked and combined to create endless structures.",
        "image": "https://static.independent.co.uk/2023/04/13/17/best%20dog%20toys%20copy.jpg?quality=75&width=1200&auto=webp"
    },
    {
        "id": 3,
        "title": "Remote Control Car",
        "author": "Toy Company C",
        "publicationDate": "2022-09-10",
        "content": "Get ready for thrilling races with this remote control car. It features high-speed capabilities, precise controls, and a durable design that can withstand rough terrains.",
        "image": "https://m.media-amazon.com/images/I/51aFKpqpXCS._AC_SR263,263_QL70_.jpg"
    }

]

const BlogSection = () => {
    return (
        <div className="my-10">
            <div className="text-center mb-10">
                <h1 className="text-5xl font-bold mb-4">Our <span className="text-fuchsia-500">Blogs</span></h1>
                <p className="text-gray-700 text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis recusandae iure distinctio sunt <br /> voluptate quidem itaque, odio iste qui possimus.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-4">
                {
                    blogs.map(blog => (
                        <div key={blog.id} className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src={blog.image} alt={blog.title} /></figure>
                            <strong className="mt-2 pl-4 text-fuchsia-400">Date: {blog.publicationDate}</strong>
                            <div className="card-body">
                                <h2 className="card-title">{blog.title}</h2>
                                <p>Author: {blog.author}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn">Read more</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default BlogSection;