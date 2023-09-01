import FormInput from "./FormInput";
import { inputType } from './Form';

function ProductItem(props) {
  const { product, changeHandler, deleteHandler } = props;

  return (
    <div className="form-input__list">
      {Object.keys(product).map((key) => {
        return <FormInput
          name={key}
          label={key}
          type={inputType(key)}
          value={product[key]}
          key={key}
          onChange={changeHandler}
        />;
      })}
      <button onClick={deleteHandler}>Remove</button>
    </div>
  );
}

export default ProductItem;