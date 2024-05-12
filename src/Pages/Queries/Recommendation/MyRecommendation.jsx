import React, { useEffect, useState } from 'react';
import UseAuth from '../../../Hook/UseAuth';
import { RxCross2 } from 'react-icons/rx';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyRecommendation = () => {
    const { user } = UseAuth();
    const [myRecommendation, setMyRecommendation] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/recommendation/${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    setMyRecommendation(data)
                })
        }
    }, [user?.email]);
    console.log(myRecommendation);

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/recommendation/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Tourist Spot has been deleted.",
                                icon: "success"
                            });
                            const remaining = myRecommendation.filter(spot => spot._id !== id);
                            setMyRecommendation(remaining)
                        }
                    })

            }
        });
    }

    return (
        <div className="w-full md:w-8/12 mx-auto rounded-3xl py-20">
            <h1 className="text-2xl pb-5 font-bold">My Recommendation <span className='bg-green-300  text-base px-4 rounded-3xl'>{myRecommendation.length}</span> </h1>

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th className='border p-3 text-lg font-bold '>Query Image</th>
                            <th className='border p-3 text-lg font-bold '>Query Title</th>
                            <th className='border p-3 text-lg font-bold '>Product Name</th>
                            <th className='border p-3 text-lg font-bold '>Recommendation Product</th>
                            <th className='border p-3 text-lg font-bold '>Recommendation Reason</th>
                            <th className='border p-3 text-lg font-bold '>Delete</th>
                        </tr>
                    </thead>
                    {
                        myRecommendation.map(data => <>
                            <tbody>
                                <tr>
                                    <td className='border'><img className="w-32" src={data.img} alt="" /></td>
                                    <td className='border'>{data.queryTitle}</td>
                                    <td className='border'>{data.productName}</td>
                                    <td className='border'>{data.recommendedProductName}</td>
                                    <td className='border'>{data.recommendationReason}</td>
                                    <th className='border'>
                                        <button className="btn rounded-full" onClick={() => handleDelete(data._id)}><RxCross2 /></button>
                                    </th>
                                </tr>
                            </tbody>
                        </>)
                    }
                </table>
            </div>
        </div>
    );
};

export default MyRecommendation;