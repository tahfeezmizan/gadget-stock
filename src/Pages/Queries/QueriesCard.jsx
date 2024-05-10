import { CiCalendarDate } from "react-icons/ci";
import { Link } from "react-router-dom";

const QueriesCard = ({ data }) => {

    const {
        _id,
        email,
        userName,
        userPhoto,
        productName,
        imageUrl,
        brandName,
        queryTitle,
        boycottingReason,
        date,
    } = data;

    return (
        <Link to={`queries/${_id}`}>
            <div className="bg-white border rounded-xl flex justify-around flex-col hover:shadow-lg duration-500 overflow-hidden">
                <div className="h-64 overflow-hidden ">
                    <img className="w-full p-3 h-full object-contain transition-transform transform hover:scale-105 duration-500 ease-in-out" src={imageUrl} alt="" />
                </div>
                <div className="p-5">
                    <h2 className="text-xl mb-4 text-[#0d1637] font-Jost capitalize my-1 font-medium">{queryTitle}</h2>

                    <div className="flex items-center gap-6 py-3 pb-4 border-b">
                        <p className="text-gray-400"> Brand Name: <span className="text-black font-semibold"> <br /> {brandName}</span></p>
                        <p className="text-gray-400 text-base">Product Name: <span className="text-black font-semibold"> <br /> {productName}</span></p>
                    </div>

                    <div className="flex items-center justify-between gap-3 pt-4 pb-2">
                        <div className="flex gap-3 items-start">
                            <img src={userPhoto} className="rounded-full w-12" alt="" />
                            <div className="">
                                <h2 className="text-lg font-semibold font-Jost capitalize">{userName}</h2>
                                <p className="text-gray-500">UnKnown</p>
                            </div>
                        </div>
                        <p className="text-gray-500 flex items-center gap-2 font-Jost"><span className="text-lg"><CiCalendarDate /></span> {date}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default QueriesCard;