import React, { useEffect, useState } from 'react';
import { API_URL } from '../../constant';
import QueriesCard from './QueriesCard';

const Queries = () => {
    const [card, setCard] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [gridLayout, setGridLayout] = useState('grid-cols-3');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetch(`${API_URL}/queries`)
            .then(res => res.json())
            .then(data => {
                setCard(data);
                setIsLoading(false);
            });
    }, []);

    const handleGridLayoutChange = (layout) => {
        setGridLayout(layout);
    };

    const handleSearch = () => {
        console.log('Search query:', searchQuery);
    };

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Filtering queries based on search query
    const filteredQueries = card.filter(query => query.productName.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <div className="hero bg-base-200">
            <div className="w-full lg:w-5/6 xl:w-8/12 mx-auto px-2 lg:px-0 py-10 md:py-12 lg:py-20">
                <div className="my-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <h2 className="text-3xl md:text-5xl font-bold pl-2">All Queries</h2>
                    <div className="flex gap-5 items-center">
                        <button className='btn btn-warning rounded-none' onClick={() => handleGridLayoutChange('grid-cols-2')}>Grid 2</button>
                        <button className='btn btn-warning rounded-none' onClick={() => handleGridLayoutChange('grid-cols-3')}>Grid 3</button>

                        <div className="relative">
                            <input
                                type="text"
                                className="input input-bordered border-none outline-none"
                                placeholder="Search by product name..."
                                value={searchQuery}
                                onChange={handleInputChange}
                            />
                            <button className="btn btn-primary" onClick={handleSearch}>Go</button>
                        </div>
                    </div>
                </div>

                {isLoading ?
                    <div className="w-full flex justify-center items-center">
                        <span className="loading loading-spinner text-error text-5xl"></span>
                    </div> :
                    <div className={`grid ${gridLayout} gap-10`}>
                        {filteredQueries.map(data => (
                            <QueriesCard
                                data={data}
                                key={data._id}
                            />
                        ))}
                    </div>
                }
            </div>
        </div>
    );
};

export default Queries;
