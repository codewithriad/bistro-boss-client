const Menuitem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex space-x-2">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        width="100"
        src={image}
        alt=""
      />
      <div>
        <h3 className="text-xl">{name}</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default Menuitem;
