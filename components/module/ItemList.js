import ProductItem from "./ProductItem";

function ItemList({ form, setForm }) {
  const { products } = form;

  const addHnadler = () => {
    setForm({
      ...form,
      products: [...products, { name: "", price: "", qty: "" }],
    });
  };

  const changeHandler = (e, index) => {
    const { name, value } = e.target;
    const newProducts = [...products];
    newProducts[index][name] = value;
    setForm({ ...form, products: newProducts });
  };

  const deleteHandler = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setForm({ ...form, products: newProducts });
  };

  return (
    <div className="item-list">
      <p>Purchased products</p>
      {products.map((product, index) => (
        <ProductItem
          key={index}
          form={form}
          product={product}
          changeHandler={(e) => changeHandler(e, index)}
          deleteHandler={() => deleteHandler(index)}
        />
      ))}
      <button onClick={addHnadler}>Add Item</button>
    </div>
  );
}

export default ItemList;

