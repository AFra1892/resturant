import MenuSingleCard from './MenuSingleCard';

const MenuCard = ({ menu ,cat }) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {menu.map((item) => {
        if(item.category === cat){
            return <MenuSingleCard key={item._id} food={item}  />
        }
      }
        
        
      )}
    </div>
  );
};

export default MenuCard;
