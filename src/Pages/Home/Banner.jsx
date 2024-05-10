import { Swiper, SwiperSlide } from 'swiper/react';
import sliderBg from '../../assets/slider-bg.jpg';
import slider1 from '../../assets/hero-1.webp';
import slider2 from '../../assets/hero-2.png';

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
                Autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
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
                                <div className="flex-1 flex items-center justify-center">
                                    <img src={slider1} alt="" />
                                </div>
                                <div className="flex-1">
                                    <h4 className='text-gray-400 text-2xl font-medium md:text-xl'>Experience the Unseen!</h4>
                                    <h1 className='text-white text-3xl md:text-6xl pr-40 my-8 font-Jost font-bold'>Your Home Smart Devices & Best Solution</h1>
                                    <p></p>
                                    <button className='btn btn-outline text-white border hover:bg-[#d01818] px-10 text-xl'>Shop Now</button>
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
                        backgroundRepeat: 'no-repeat',

                    }}
                >
                    <div className="h-full  flex items-center"  >
                        <div className="w-full md:w-8/12 mx-auto">
                            <div className="flex justify-between items-center gap-10">
                                <div className="flex-1">
                                    <img src={slider2} alt="" />
                                </div>
                                <div className="flex-1">
                                    <h4 className='text-gray-400 text-2xl font-medium md:text-xl'>Experience the Unseen!</h4>
                                    <h1 className='text-white text-3xl md:text-6xl pr-40 my-8 font-Jost font-bold'>Uncovering Stories, One Trip At A Time</h1>
                                    <p></p>
                                    <button className='btn btn-outline text-white border hover:bg-[#d01818] px-10 text-xl'>Shop Now</button>
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
                        backgroundRepeat: 'no-repeat',

                    }}
                >
                    <div className="h-full  flex items-center"  >
                        <div className="w-full md:w-8/12 mx-auto">
                            <div className="flex justify-between items-center gap-10">
                                <div className="flex-1">
                                    <img src={slider2} alt="" />
                                </div>
                                <div className="flex-1">
                                    <h4 className='text-gray-400 text-2xl font-medium md:text-xl'>Experience the Unseen!</h4>
                                    <h1 className='text-white text-3xl md:text-5xl my-8 font-Jost font-bold '>Uncovering Stories, One Trip At A Time</h1>
                                    <p></p>
                                    <button className='btn btn-outline text-white border hover:bg-[#d01818] px-10 text-xl'>Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper >
        </div>
    );
};

export default Banner;