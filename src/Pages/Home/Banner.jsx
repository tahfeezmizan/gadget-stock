import { Swiper, SwiperSlide } from 'swiper/react';
import sliderBg from '../../assets/slider-bg.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
            {/* <Helmet>
                <title>Home - </title>
            </Helmet> */}
            <Swiper
                direction={'vertical'}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper homeBanner"
            >
                <SwiperSlide
                    style={{
                        backgroundImage: `url(${sliderBg})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',

                    }}
                >
                    <div className="h-full  flex items-center"  >
                        <div className="w-full md:w-8/12 mx-auto">
                            <div className="flex justify-between items-center gap-10">
                                <div className="flex-1">
                                    <img src={sliderBg} alt="" />
                                </div>
                                <div className="flex-1">
                                    <h4 className='font-bold text-gray-400 text-base md:text-xl mb-2'>Experience the Unseen!</h4>
                                    <h1 className='text-white text-3xl md:text-5xl my-8 font-Jost font-bold '>Uncovering Stories, One Trip At A Time</h1>
                                    <p></p>
                                    <button data-aos="fade-up" data-aos-duration="1600" className='btn border-none text-white  bg-[#d01818] hover:bg-[#0d1637] px-10 text-xl'>Get Start</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        backgroundImage: `url(${sliderBg})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div className="h-full flex items-center text-white">
                        <div className="w-8/12 mx-auto text-center">
                            <h4 className='font-bold text-white text-base md:text-xl mb-2'>Discover New Horizons!</h4>
                            <h1 className='text-white text-3xl md:text-6xl xl:text-8xl  px-10 xl:px-28 b-5 md:pb-10  font-bold '>Explore World And Find The Beauty</h1>
                            <button className='btn border-none text-white  bg-[#d01818] hover:bg-[#0d1637] px-10 text-xl'>Get Start</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        backgroundImage: `url(${sliderBg})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div className="h-full flex items-center text-white">
                        <div className="w-8/12 mx-auto text-center">
                            <h4 className='font-bold text-white text-base md:text-xl mb-2'>Explore the World!</h4>
                            <h1 className='text-white text-3xl md:text-6xl xl:text-8xl px-10 xl:px-28 pb-5 md:pb-10  font-bold '>Explore Earth And Like The Supreme</h1>
                            <button className='btn border-none text-white  bg-[#d01818] hover:bg-[#0d1637] px-10 text-xl'>Get Start</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper >
        </div>
    );
};

export default Banner;