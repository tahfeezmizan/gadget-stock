import { useState } from "react";

const Blogs = () => {
    const [data, setData] = useState([]);

    return (
        <div className="hero bg-base-200">
            <div className="w-full lg:w-5/6 xl:w-8/12 mx-auto px-2 lg:px-0 py-10 md:py-12 lg:py-20">

                <div className="my-10">
                    <h2 className="text-3xl md:text-5xl font-Jost font-bold pb-5">Latest Blog</h2>
                    <p className="font-Roboto text-lg">There are many variations of passages of Lorem Ipsum available</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-6 sm:mb-4 md:mb-4">

                </div>
            </div>
        </div>
    );
};

export default Blogs;