import React, { useEffect, useState } from 'react';
import UseAuth from '../../../Hook/UseAuth';
import { RxCross2 } from 'react-icons/rx';

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


    return (
        <div className="w-full md:w-8/12 mx-auto rounded-3xl py-20">
            <h1 className="text-2xl">My Recommendation</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Query Title</th>
                            <th>Product Name</th>
                            <th>Service Name</th>
                            <th>Service Name</th>
                            <th>Price</th>
                            <th>Data</th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        myRecommendation.map(data => <>
                            <tbody>
                                <tr>
                                    <td>{data.queryTitle}</td>
                                    <td>{data.productName}</td>
                                    <td>{data.productNam}</td>
                                    <td>{data.productNam}</td>
                                    <td>{data.service_price}</td>
                                    <td>{data.date}</td>
                                    <th>
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