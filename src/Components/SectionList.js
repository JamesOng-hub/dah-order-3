import React from "react";
import SectionItem from "./SectionItem";


export default function SectionList({ Menu }) {
  return (
      <>
    <div>
        
    </div>
    <div>
      {Menu.map((item) => {
        return <SectionItem key={item.id} item={item} />;
      })}
    </div>
    </>
  );
}
