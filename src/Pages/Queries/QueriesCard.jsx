import { CiCalendarDate } from "react-icons/ci";
import { Link } from "react-router-dom";

const QueriesCard = ({ data }) => {

    const {
        _id, userName, userPhoto, productName, imageUrl, brandName, queryTitle, date, boycottingReason } = data;

    return (
        <Link to={`/queriesDetails/${_id}`}>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="bg-gray-100">
                    <div className="h-64 overflow-hidden border-red-600">
                        <img className="w-full p-3 h-full object-contain transition-transform transform hover:scale-105 duration-500 ease-in-out" src={imageUrl} alt="" />
                    </div>
                </figure>
                <div className="card-body">
                    <p className="text-gray-500 flex items-center gap-2 font-Jost"><span className="text-lg"><CiCalendarDate /></span> {date}</p>
                    <h2 className="text-xl card-title font-Jost capitalize my-1 font-medium">{queryTitle}</h2>
                    {boycottingReason && (
                        <p className="pb-2" title={boycottingReason}>Alternation Reason:
                            <span className="font-semibold">{boycottingReason.substring(0, 70)}...</span>
                        </p>
                    )}
                    <div className="flex items-center gap-6 pb-4 border-b">
                        <p className=""> Brand Name: <span className="font-semibold"> <br /> {brandName}</span></p>
                        <p className="">Product Name: <span className="font-semibold"> <br /> {productName}</span></p>
                    </div>

                    <div className="flex items-center justify-between gap-3 pt-4 ">
                        <div className="flex gap-3 items-start">
                            <img src={userPhoto} className="rounded-full w-12" alt="" />
                            <div className="">
                                <h2 className="text-lg font-semibold font-Jost capitalize">{userName}</h2>
                                <p className="text-gray-500">UnKnown</p>
                            </div>
                        </div>
                        <Link to={`/queriesDetails/${_id}`}>
                            <button className="btn btn-warning">Recomandation</button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* <div className="bg-white border rounded-xl flex justify-around flex-col hover:shadow-lg duration-500 overflow-hidden">
                </div> */}
        </Link>
    );
};

export default QueriesCard;