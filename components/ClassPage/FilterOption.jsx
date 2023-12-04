export default function FilterOption({ name, value, handleFilter, category}) {
  return (
    <div className="grid grid-cols-4 justify-center items-center">
      <input
        type="checkbox"
        id={value}
        className=" colspan-1 h-6"
        value={value}
        onChange={() => handleFilter(value, category)}
      />
      <label htmlFor={value} className=" col-span-3 text-black text-sm">
        {name}
      </label>
    </div>
  );
}
