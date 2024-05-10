import React, { useEffect, useState } from 'react';
import QueriesCard from './QueriesCard';

const Queries = () => {
    const [card, setCard] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/queries`)
            .then(res => res.json())
            .then(data => {
                setCard(data)
                // setIsLoading(false)
            })
    }, []);
    console.log(card);

    return (
        <div className="bg-slate-50">
            <div className="w-full lg:w-5/6 xl:w-8/12 mx-auto px-2 lg:px-0 py-10 md:py-12 lg:py-20">
                <div className="my-10">
                    <h2 className="text-3xl md:text-5xl font-bold pl-2">TOP PRODUCTS</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                    {
                        card?.map(data => <QueriesCard
                            data={data}
                            key={card._id}></QueriesCard>)
                    }
                </div>
            </div >
        </div>
    );
};

export default Queries;
