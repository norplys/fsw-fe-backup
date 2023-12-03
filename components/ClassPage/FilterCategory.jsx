import FilterOption from "./FilterOption"
import { useState } from "react";



export default function FilterCategory({ category, card, pathname, router, createQueryString, }) {
    if(category === "Kategori"){
        category = "categoryId"
      }
      if(category === "Kesulitan"){
        category = "level"
      }
    const [checked, setChecked] = useState([]);
    const handleFilter = (e) => {
        const currentIndex = checked.indexOf(e.target.value);
        const newChecked = [...checked];
        if (currentIndex === -1) {
          newChecked.push(e.target.value);
        } else {
          newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
        router.push(pathname + "?" + createQueryString(category, newChecked.join(",")));
      }

    return (
    <>
    <h2 className="text-black font-bold text-base">{category === 'categoryId' ? "Kategori" : category === "level" ? "Kesulitan" : ""}</h2>
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
            />
        ))
    }
    </>
    )
}

