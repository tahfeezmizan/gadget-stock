import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../Hook/useAxiosSecure';
import Blogs from '../Blogs/Blogs';
import QueriesCard from '../Queries/QueriesCard';
import Sponsors from '../Sponsors/Sponsors';
import Banner from './Banner';
import TinyBanner from './TinyBanner';

const Home = () => {
    const [card, setCard] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const AxiosSecure = useAxiosSecure();

    useEffect(() => {
        AxiosSecure.get(`/queries`)
            .then(res => {
                setCard(res.data)
                setIsLoading(false)
            })
    }, []);

    return (
        <div>
            <Banner></Banner>
            <TinyBanner></TinyBanner>

            <div className="hero bg-base-200">
                <div className="w-full lg:w-5/6 xl:w-8/12 mx-auto px-2 lg:px-0 py-10 md:py-12 lg:py-20">
                    <div className="my-10 pb-5">
                        <h2 className="text-3xl md:text-5xl font-bold pl-2">Top Queries</h2>
                    </div>

                    {isLoading ?
                        <div className="w-full flex justify-center items-center">
                            <span className="loading loading-spinner text-error text-5xl"></span>
                        </div> :

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                            {
                                card?.slice(0, 6)?.map(data => <QueriesCard
                                    data={data}
                                    key={card?._id}></QueriesCard>)
                            }
                        </div>
                    }
                </div >
            </div>

            <Sponsors></Sponsors>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;