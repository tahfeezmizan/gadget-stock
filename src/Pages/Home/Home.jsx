import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import Queries from '../Queries/Queries';
import QueriesCard from '../Queries/QueriesCard';
import { Link } from 'react-router-dom';

const Home = () => {
    const [card, setCard] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/queries`)
            .then(res => res.json())
            .then(data => {
                setCard(data)
                setIsLoading(false)
            })
    }, []);
    // console.log(card);


    return (
        <div>
            <Banner></Banner>
            {/* <Queries></Queries> */}

            <div className="hero bg-base-200">
                <div className="w-full lg:w-5/6 xl:w-8/12 mx-auto px-2 lg:px-0 py-10 md:py-12 lg:py-20">
                    <div className="my-10">
                        <h2 className="text-3xl md:text-5xl font-bold pl-2">TOP PRODUCTS</h2>
                    </div>

                    {isLoading ?
                        <div className="w-full flex justify-center items-center">
                            <span className="loading loading-spinner text-error text-5xl"></span>
                        </div> :

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                            {
                                card.slice(0, 6)?.map(data => <QueriesCard
                                    data={data}
                                    key={card._id}></QueriesCard>)
                            }
                        </div>
                    }

                    <div className="pt-20 text-center">
                        <button className="btn btn-warning text-white px-10 text-xl">
                            <Link to="/queries">See All Queries</Link>
                        </button>
                    </div>
                </div >
            </div>
        </div>
    );
};

export default Home;