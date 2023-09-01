import FormInput from "./FormInput";
import ItemList from "./ItemList";

const Form = ({ form, setForm }) => {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      {Object?.keys(form).map((key) => {
        return key !== 'products' &&
          <FormInput
            name={key}
            label={key}
            type={inputType(key)}
            value={form[key]}
            onChange={changeHandler}
          />;
      })}
      <ItemList form={form} setForm={setForm} />
    </div>
  );
};

export default Form;

export const inputType = (value) => {
  return value === 'date' ? 'date' : value === 'phone' || value === 'postalCode' || value === 'price' || value === 'qty' ? 'number' : "text";
};