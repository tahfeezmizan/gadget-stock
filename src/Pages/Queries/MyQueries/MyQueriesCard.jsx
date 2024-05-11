import React from 'react';
import { CiCalendarDate } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const MyQueriesCard = ({ data }) => {
    const { _id, userName, userPhoto, productName, imageUrl, brandName, queryTitle, date } = data;

    const handleDelete = id => {
        const proceed = confirm('Are you sure want to delete')
        console.log(id);
        if (proceed) {
            fetch(``, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted sucessfully');
                        // const remaning = item.filter(data => data._id !== id);
                        setItem(remaning);
                    }
                })
        }
    }

    return (
        <Link to={`queries/${_id}`}>
            <div className="bg-white border rounded-xl flex justify-around flex-col hover:shadow-lg duration-500 overflow-hidden">
                <div className="h-64 overflow-hidden ">
                    <img className="w-full p-3 h-full object-contain transition-transform transform hover:scale-105 duration-500 ease-in-out" src={imageUrl} alt="" />
                </div>
                <div className="p-5">
                    <p className="text-gray-500 flex items-center gap-2 font-Jost"><span className="text-lg"><CiCalendarDate /></span> {date}</p>
                    <h2 className="text-xl mb-4 text-[#0d1637] font-Jost capitalize my-1 font-medium">{queryTitle}</h2>

                    <div className="flex items-center gap-6 py-3 pb-4 border-b">
                        <p className="text-gray-400"> Brand Name: <span className="text-black font-semibold"> <br /> {brandName}</span></p>
                        <p className="text-gray-400 text-base">Product Name: <span className="text-black font-semibold"> <br /> {productName}</span></p>
                    </div>

                    <div className="flex items-center justify-between gap-3 pt-4 pb-2">
                        <button onClick={() => handleDelete(_id)} className='btn btn-outline btn-sm hover:bg-[#d01818] text-xl'>Delete</button>
                        <button className='btn btn-outline btn-sm hover:bg-[#d01818] text-xl'>Update</button>
                        <button className='btn btn-outline btn-sm hover:bg-[#d01818] text-xl'>View Details</button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default MyQueriesCard;