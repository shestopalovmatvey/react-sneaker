import React from "react";
import Card from "../../components/Card/Card";
import SearchItems from "../../components/SearchItems/SearchItems";

export default function Home({
  setInputValue,
  filteredItems,
}) {
  return (
    <div className="content">
      <SearchItems setInputValue={setInputValue} />

      <div className="cards">
        {filteredItems.map((elem) => (
          <Card
            {...elem}
            key={elem.id}
          />
        ))}
      </div>
    </div>
  );
}
