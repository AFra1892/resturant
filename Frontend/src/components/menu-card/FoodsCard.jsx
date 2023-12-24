
import FoodSingleCard from './FoodSingleCard';

const FoodsCard = ({ foods }) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {foods.map((item) => (
        <FoodSingleCard key={item._id} food={item} />
      ))}
    </div>
  );
};

export default FoodsCard;
