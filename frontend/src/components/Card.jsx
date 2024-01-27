import React from "react";

function Card(props) {
    return props.display ? (
        <div className="absolute z-99 rounded-xl bg-white flex flex-col lg:flex-row justify-center text-center p-4 left-1/2 transform -translate-x-1/2 lg:top-44 top-36 w-80 lg:w-fit">
            <div className="lg:mr-24 lg:ml-10">
                <label className="text-gray-400 lg:m-2">IP ADDRESS</label>
                <h1 className="text-3xl lg:m-2">{props.data.ip || '-'}</h1>
            </div>
            <div className="lg:h-16 h-0.5 w-44 mx-auto bg-gray-300 lg:mb-0 mb-4 lg:w-0.5"></div>
            <div className="lg:mr-24 lg:ml-10">
                <label className="text-gray-400 lg:m-2">LOCATION</label>
                <h1 className="text-3xl lg:m-2">{props.data.city || '-'}, {props.data.region || '-'}, {props.data.country || '-'}</h1>
            </div>
            <div className="lg:h-16 h-0.5 w-44 mx-auto bg-gray-300 lg:mb-0 mb-4 lg:w-0.5"></div>
            <div className="lg:mr-24 lg:ml-10">
                <label className="text-gray-400 lg:m-2">TIMEZONE</label>
                <h1 className="text-3xl lg:m-2">UTC {props.data.timezone || '-'}</h1>
            </div>
            <div className="lg:h-16 h-0.5 w-44 mx-auto bg-gray-300 lg:mb-0 mb-4 lg:w-0.5"></div>
            <div className="lg:mr-24 lg:ml-10">
                <label className="text-gray-400 lg:m-2">ISP</label>
                <h1 className="text-3xl lg:m-2">{props.data.isp || '-'}</h1>
            </div>
        </div>
    ) : null;
}

export default Card;