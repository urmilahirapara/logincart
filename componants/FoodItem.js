import { IMG_CON_URL } from "../contants";
const FoodItem = ({ name, description, cloudinaryImageId, price }) => {
  return (
    <div className="px-5 py-2 m-2 flex-wrap h-[25rem] w-[25rem] shadow-lg bg-blue-50 inline-block">
      <img src={IMG_CON_URL + cloudinaryImageId} />
      <h4 className="font-bold text-xl">{name}</h4>
      <h4>{description}</h4>
      <h4>{price / 100} </h4>
    </div>
  );
};
export default FoodItem;
