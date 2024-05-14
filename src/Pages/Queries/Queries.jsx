import React, { useEffect, useState } from 'react';
import { API_URL } from '../../constant';
import QueriesCard from './QueriesCard';
import useAxiosSecure from '../../Hook/useAxiosSecure';

const Queries = () => {
    const AxiosSecure = useAxiosSecure();
    const [card, setCard] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchText, setSearchText] = useState('');
    const [gridLayout, setGridLayout] = useState('grid-cols-3');
    const [searchProduct, setSearchProduct] = useState('');

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
        console.log('Search term:', searchText);
    };

    const handleChange = (event) => {
        setSearchText(event.target.value);
    };

    useEffect(() => {
        AxiosSecure.get(`/queries/${searchText}`)
            .then(res => {
                const matchProduct = res.data.filter(product => product.productName === searchText);
                setSearchProduct(matchProduct);

                console.log('match product', matchProduct);
            });
    }, [])
    // console.log(searchProduct);

    return (
        <div className="hero bg-base-200">
            <div className="w-full lg:w-5/6 xl:w-8/12 mx-auto px-2 lg:px-0 py-10 md:py-12 lg:py-20">
                <div className="my-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <h2 className="text-3xl md:text-5xl font-bold pl-2">All Queries</h2>
                    <div className="flex gap-5 items-center">
                        <button className='btn btn-warning rounded-none' onClick={() => handleGridLayoutChange('grid-cols-2')}>Grid 2</button>
                        <button className='btn btn-warning rounded-none' onClick={() => handleGridLayoutChange('grid-cols-3')}>Grid 3</button>

                        <div>
                            <input
                                type="text"
                                name='search'
                                placeholder="Search"
                                className="input input-bordered"
                                value={searchText}
                                onChange={handleChange}
                            />
                            <button className='btn btn-warning rounded-none' onClick={handleSearch}>Search</button>
                        </div>

                    </div>
                </div>

                {isLoading ?
                    <div className="w-full flex justify-center items-center">
                        <span className="loading loading-spinner text-error text-5xl"></span>
                    </div> :
                    <div className={`grid ${gridLayout} gap-10`}>
                        {
                            card?.map(data => (
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
