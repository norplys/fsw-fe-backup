export default function FilterOption({ name, value, handleFilter, category ,queryCategory ,queryLevel}) {
  queryCategory? queryCategory : queryCategory = []
  queryLevel? queryLevel : queryLevel = []
  return (
    <div className="grid grid-cols-4 justify-center items-center accent-secret-cyan">
      <input
        type="checkbox"
        id={value}
        className=" colspan-1 h-6"
        value={value}
        onChange={() => handleFilter(value, category)}
        checked={queryLevel.includes(value) || queryCategory.includes(value)}
      />
      <label htmlFor={value} className=" col-span-3 text-secret-text text-sm">
        {name}
      </label>
    </div>
  );
}
