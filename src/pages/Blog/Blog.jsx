/* eslint-disable react/no-unescaped-entities */


const Blog = () => {
    return (
        <div className="container mx-auto my-14">
            <div id="blog-content">

                <div className="collapse mb-5 collapse-arrow border border-base-400 bg-base-100 rounded-box">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        A) What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </div>
                    <div className="collapse-content">
                        <p>
                            An access token is a security credential that is used to authenticate and authorize a client to access protected resources in a system.
                            <br />
                            A refresh token is a separate credential that is used to obtain a new access token when the current one expires. It is typically a long-lived token with a longer lifespan than the access token.
                            <br />
                            On the client-side, both the access token and refresh token should be securely stored.
                        </p>
                    </div>
                </div>

                <div className="collapse mb-4 collapse-arrow border border-base-400 bg-base-100 rounded-box">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        B) Compare SQL and NoSQL databases?
                    </div>
                    <div className="collapse-content">
                        <p>SQL databases are based on the relational data model. They use structured schemas and tables to organize and store data. SQL databases enforce strong data consistency and provide support for complex queries and transactions.
                            <br /> <br />
                            NoSQL databases, on the other hand, are designed to handle large amounts of unstructured or semi-structured data. They use a variety of data models, including key-value, document, columnar, and graph, to store and retrieve data.
                        </p>
                    </div>
                </div>

                <div className="collapse mb-4 collapse-arrow border border-base-400 bg-base-100 rounded-box">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        C) What is express js? What is Nest JS?
                    </div>
                    <div className="collapse-content">
                        <p>
                            Express.js is a popular web application framework for Node.js. It provides a simple and flexible way to build web applications and APIs. Express.js is minimalist and unopinionated, allowing developers to structure their applications according to their preferences.
                            <br /><br />
                            Nest.js is a progressive Node.js framework built on top of Express.js. It combines elements of object-oriented programming , functional programming, and metaprogramming to provide a scalable and maintainable architecture for building server-side applications. 
                        </p>
                    </div>
                </div>

                <div className="collapse mb-4 collapse-arrow border border-base-400 bg-base-100 rounded-box">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        D)  What is MongoDB aggregate and how does it work?
                    </div>
                    <div className="collapse-content">
                        <p>MongoDB's aggregate is a powerful method that allows for advanced data processing and analysis within MongoDB. It provides a way to perform complex operations on data stored in MongoDB collections. The aggregate pipeline consists of multiple stages, each of which applies a specific operation to the input documents and passes the results to the next stage.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;