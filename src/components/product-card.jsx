import { Link } from "react-router-dom";

export const ProductCard = ({ id, image, title,ratingIcon,rating,audioIcon, janr = '', bookIconL = '' }) => {
	
	if ((janr && bookIconL) || (janr && audioIcon)) {
		return (
      <div className="w-[239px]">
        <Link to={`/product/${id}`}>
          <img className="mb-[27px]" src={image} alt="img" />
          <h2 className="font-bold text-[20px] text-[#11142d]">{title}</h2>
          <p className="mt-2.5 text-blue-500">{janr}</p>
          <div className="flex justify-between">
            <div className="flex items-center gap-2.5 ml-[5px]">
              <img src={ratingIcon} alt="ratingIcon" />
              <p className="text-orange-500 text-[21px]">{rating}</p>
            </div>

            {bookIconL ? (
              <div className="flex gap-5 mr-5">
                <img src={audioIcon} alt="audio" />
                <img src={bookIconL} alt="book" />
              </div>
            ) : (
              <div className="mr-5">
                <img src={audioIcon} alt="audio" />
              </div>
            )}
          </div>
        </Link>
      </div>
    );
  }
  return (
    <div>
      <Link to={`/product/${id}`}>
        <img className="w-[190px] h-[267px]" src={image} alt="img" />
        <h3 className="text-xl font-bold">{title}</h3>
      </Link>
    </div>
  );
}
