import FilterOption from "./FilterOption"

export default function FilterCategory({ category, card }) {
    return (
    <>
    <h2 className="text-black font-bold text-base">{category}</h2>
    {
        card.map((item, i) => (
            <FilterOption key={i} name={item.name} value={item.value}/>
        ))
    }
    </>
    )
}

