import PropTypes from "prop-types";

const Card = ({ img, title, description }) => {
  return (
    <div className="bg-[rgb(24,24,24)] w-48 h-72 p-4  rounded-lg text-white cursor-pointer hover:bg-[rgb(36,36,36)]">
      <img src={img} alt="" className="rounded-lg w-full" />
      <h1 className="font-semibold pt-5 text-base capitalize">{title}</h1>
      <p className="text-sm text-white/50 pt-3 font-medium capitalize  line-clamp-2">{description}</p>
    </div>
  );
};
Card.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
export default Card;
