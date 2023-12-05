import FilterOption from "./FilterOption"



export default function FilterCategory({ category, card, pathname, router, createQueryString, handleFilter, queryCategory, queryLevel }) {
    return (
    <>
    <h2 className="text-secret-text font-bold text-base">{category === 'Kategori' ? "Kategori" : category === "level" ? "Kesulitan" : ""}</h2>
    {
        card.map((item, i) => (
            <FilterOption key={i} 
            name={item.name} 
            value={item.id}
            createQueryString={createQueryString}
            pathname={pathname}
            router={router}
            category={category}
            handleFilter={handleFilter}
            queryCategory={queryCategory}
            queryLevel={queryLevel}
            />
        ))
    }
    </>
    )
}

