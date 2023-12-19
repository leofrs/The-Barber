import Tesoura from "../assets/tesoura.png";

import { Link } from "react-router-dom";

import { services } from "../data/services";

const Card = () => {
  return (
    <>
      <Link to="/user/agenda" className="flex flex-wrap gap-4 justify-center">
        {services.map((service) => (
          <div
            className="w-32 border border-[#FFEFC7] rounded-lg cursor-pointer"
            key={service.id}
          >
            <img className="w-full" src={Tesoura} />
            <button className="px-6 py-4 cursor-pointer text-center w-full ">
              {service.service}
            </button>
          </div>
        ))}
      </Link>
    </>
  );
};
export default Card;
