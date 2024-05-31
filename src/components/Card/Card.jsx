import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Card = ({ data }) => {

    const { id } = data;

    return (
        <div data-aos="zoom-in" data-aos-duration="1000" className="card lg:w-96 bg-base-100 shadow-xl border border-[#d8c7c7]">
            <figure><img src={data.image} alt="Image comming" /></figure>
            <div className="card-body mr-4 lg:mr-0">
                <h2 className="text-2xl font-semibold">{data.estate_title}</h2>
                <p className='text-base font-semibold'>{data.segment_name}</p>

                <div className='flex justify-between py-3'>
                    <p><span className="text-base font-semibold">Area :</span> {data.area}</p>
                    <p className='flex pl-10'><GrLocation className='text-xl' /> &nbsp; <span>{data.location}</span></p>

                </div>

                <div className="flex items-center justify-between">
                    <h1 className='font-bold'>price: {data.price}</h1>
                    <Link to={`/details/${id}`} className="btn bg-cyan-800 text-white hover:bg-green-800">View Property</Link>
                </div>
            </div>
        </div>
    );
};

Card.prototype = {
    data: PropTypes.object,
}

export default Card;