const Filter = ({ value, onChangeInput }) => {
  return (
    <div>
      <label htmlFor="filter">Find contacts by name</label>
      <input onChange={onChangeInput} type="text" name="filter" value={value} />
    </div>
  );
};
export default Filter;
