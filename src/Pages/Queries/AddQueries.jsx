import UseAuth from "../../Hook/UseAuth";

const AddQueries = () => {
    const { user } = UseAuth();

    const handleAddQuries = e => {
        e.preventDefault();
        const email = user.email;
        const username = user.displayName;

        const form = e.target;
        const productName = form.productName.value;
        const brandName = form.brandName.value;
        const image = form.image.value;
        const queryTitle = parseInt(form.queryTitle.value);

        const addQuery = { email, username, productName, image, brandName, queryTitle}
        console.log(addQuery)

        fetch(``, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(addQuery)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                // if (data.insertedId) {
                //     Swal.fire({
                //         title: 'success',
                //         text: 'Add New Touris Spot',
                //         icon: 'success',
                //         confirmButtonText: 'Ok'
                //     })
                //     form.reset('')
                // }
            })
    }


    return (
        <div className="py-10">
            <div className="w-full md:w-8/12 mx-auto">
                <div className="max-w-screen-md mx-auto border rounded-lg p-12">
                    <h1 className="text-2xl md:text-5xl text-center font-bold pb-5">Add New Quries</h1>

                    <form onSubmit={handleAddQuries}>
                        <div className="flex flex-col md:flex-row gap-0 md:gap-8">
                            <div className="flex-1 space-y-2 mb-4">
                                <label className="md:text-lg font-medium">Product Name</label>
                                <input
                                    type="text" name="productName"
                                    placeholder="Product Name"
                                    className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="flex-1 space-y-2 mb-4">
                                <label className="md:text-lg font-medium">Brand Name</label>

                                <input
                                    type="text" name="brandName"
                                    placeholder="Brand Name"
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-0 md:gap-8">
                            <div className="flex-1 space-y-2 mb-4">
                                <label className="md:text-lg font-medium">Average Cost</label>
                                <input
                                    type="number" name="queryTitle"
                                    placeholder="Query Title"
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </div>

                            <div className="flex-1 space-y-2 mb-4">
                                <label className="md:text-lg font-medium">Image Url</label>
                                <input
                                    type="text" name="image"
                                    placeholder="Product Image Url"
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-0 md:gap-8">
                            <div className="flex-1 space-y-2 mb-4">
                                <label className="md:text-lg font-medium block">Country Name</label>
                                <input
                                    type="text" name="image"
                                    placeholder="Product Image Url"
                                    className="input input-bordered w-full max-w-xs"
                                />

                            </div>
                            <div className="flex-1 space-y-2 mb-4">
                                <label className="md:text-lg font-medium block">Seasonality</label>
                                <input
                                    type="text" name="image"
                                    placeholder="Product Image Url"
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-0 md:gap-8">
                            <div className="flex-1 space-y-2 mb-4">
                                <label className="md:text-lg font-medium">Total Visitors PerYear</label>
                                <input
                                    type="text" name="image"
                                    placeholder="Product Image Url"
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </div>

                            <div className="flex-1 space-y-2 mb-4">
                                <label className="md:text-lg font-medium block">Travel Time</label>
                                <input
                                    type="text" name="image"
                                    placeholder="Product Image Url"
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </div>
                        </div>
                        <div className="form-control my-6">
                            <button className="btn bg-[#d01818] hover:bg-[#0d1637] text-white text-xl font-bold">Add New Query</button>
                        </div>
                    </form>
                </div >
            </div >
        </div>
    );
};

export default AddQueries;