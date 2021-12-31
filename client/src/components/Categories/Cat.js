import {React} from "react";
import { useState } from "react";

export default function Cat({cat, handleFilter}) {

  const [style, setStyle] = useState({ display: "none" });
  return (
    <div>
      <h3
        className="cat"
        onMouseEnter={(e) => {
          setStyle({ display: "block" });
        }}
        onMouseLeave={(e) => {
          setStyle({ display: "none" });
        }}
        key={cat._id}
        onClick={()=>handleFilter(cat.name)}
      >
        {cat.name}
        <i style={style} className="catx fas fa-times"></i>
      </h3>
    </div>
  );
}
