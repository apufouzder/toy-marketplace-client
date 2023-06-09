const images = [
    {
        id: 1,
        photo: "https://images.unsplash.com/photo-1652536122320-ca870caea2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
        id: 2,
        photo: "https://images.unsplash.com/photo-1617007723343-cf6eaa2355a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    {
        id: 3,
        photo: "https://images.unsplash.com/photo-1559715541-5daf8a0296d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80"
    },
    {
        id: 4,
        photo: "https://images.unsplash.com/photo-1618397360709-9dd900837411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=742&q=80"
    },
    {
        id: 5,
        photo: "https://images.unsplash.com/photo-1619508111539-a0c4d7afa3d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
        id: 6,
        photo: "https://images.unsplash.com/photo-1660306846002-81acf3b5cd2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
    },
]

const GallerySection = () => {
    return (

        <div className="my-20">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold mb-4">Toys <span className="text-fuchsia-500">Gallery</span></h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {
                    images.map(image => <img key={image.id} className="h-auto max-w-full rounded-lg" src={image.photo} alt=""></img>)
                }
            </div>
        </div>

    );
};

export default GallerySection;