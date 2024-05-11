import { useEffect, useState } from "react";
import UseAuth from "../../Hook/UseAuth";
import Swal from "sweetalert2";

const AddRecommendation = ({ card }) => {
    const { user } = UseAuth();

    const handleAddRecommendation = e => {
        e.preventDefault();
        const today = new Date();
        const form = e.target;

        const recommenderEmail = user.email;
        const recommenderName = user.displayName;
        const date = today.toLocaleDateString();

        const recommendationTitle = form.recommendationTitle.value;
        const recommendedName = form.recommendedName.value;
        const recommendedImage = form.recommendedImage.value;
        const recommendationReason = form.recommendationReason.value;

        //query data and query creator data
        const queryId = card._id;
        const userEmail = card.email;
        const userName = card.userName;
        const queryTitle = card.queryTitle;
        const productName = card.productName;

        const recommendation = {
            recommenderEmail, recommenderName, date, recommendationTitle, recommendedName, recommendedImage, recommendationReason, queryId, userEmail, userName, queryTitle, productName
        }
        console.log(recommendation)

        fetch(`http://localhost:5000/recommendation`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(recommendation)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success',
                        text: 'Add New Touris Spot',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    form.reset('')
                }
            })
    }

    return (
        <div className="flex justify-between items-center gap-10">
            <div className="flex-1"></div>
            <div className="flex-1">

                <div className="max-w-screen-md mx-auto border rounded-lg p-12">
                    <h1 className="text-2xl font-medium pb-5">Add Recommendation</h1>

                    <form onSubmit={handleAddRecommendation}>
                        <div className="space-y-2 mb-4">
                            <label className="font-medium block">Recommendation Title</label>
                            <input
                                type="text" name="recommendationTitle"
                                placeholder="Recommendation Title"
                                className="input input-bordered rounded-none w-full"
                                required
                            />
                        </div>
                        <div className="flex-1 space-y-2 mb-4">
                            <label className="font-medium block">Recommended product Name</label>

                            <input
                                type="text" name="recommendedName"
                                placeholder="Recommended product Name"
                                className="input input-bordered rounded-none w-full"
                                required
                            />
                        </div>
                        <div className="flex-1 space-y-2 mb-4">
                            <label className="font-medium block">Recommended Product Image</label>
                            <input
                                type="text" name="recommendedImage"
                                placeholder="Recommended Product Image"
                                className="input input-bordered rounded-none w-full"
                                required
                            />
                        </div>
                        <div className=" space-y-2 mb-4">
                            <label className="font-medium block">Recommendation reason</label>
                            <textarea
                                name='recommendationReason'
                                placeholder="Recommendation Reason"
                                className="textarea textarea-bordered rounded-none w-full"
                                required></textarea>
                        </div>


                        <button className="btn btn-outline  border hover:bg-[#d01818] px-10 text-xl">
                            Add Recommendation
                        </button>

                    </form>
                </div >
            </div >

        </div>
    );
};

export default AddRecommendation;