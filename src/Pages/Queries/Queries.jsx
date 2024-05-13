import React, { useEffect, useState } from 'react';
import QueriesCard from './QueriesCard';
import UseAuth from '../../Hook/UseAuth';
import { API_URL } from '../../constant';

const Queries = () => {
    const { user } = UseAuth();
    const [card, setCard] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`${API_URL}/queries`)
            .then(res => res.json())
            .then(data => {
                setCard(data)
                setIsLoading(false)
            })
    }, []);

    return (
        <div className="hero bg-base-200">
            <div className="w-full lg:w-5/6 xl:w-8/12 mx-auto px-2 lg:px-0 py-10 md:py-12 lg:py-20">
                <div className="my-10 flex flex-col md:flex-row justify-between gap-6">
                    <h2 className="text-3xl md:text-5xl font-bold pl-2">TOP PRODUCTS</h2>
                    <div className="">
                        <button className='btn btn-warning rounded-none'>Grid</button>
                    </div>
                </div>

                {isLoading ?
                    <div className="w-full flex justify-center items-center">
                        <span className="loading loading-spinner text-error text-5xl"></span>
                    </div> :

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                        {
                            card?.map(data => <QueriesCard
                                data={data}
                                key={data._id}
                            ></QueriesCard>)
                        }
                    </div>
                }
            </div >
        </div>
    );
};

export default Queries;
