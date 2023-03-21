//import { useState } from "react";
import { useState } from "react";

function Entry(props) {
  const [backsideVisible, setBacksideVisible] = useState(false);
  return (
    <div
      className="entry flex-center"
      onMouseEnter={() => setBacksideVisible(true)}
      onMouseLeave={() => setBacksideVisible(false)}
    >
      {backsideVisible ? (
        <>
          <p className="topTextCard">{props.character}</p>
          <p className="bottomTextCard">{props.details}</p>
        </>
      ) : (
        <>
          <p className="topTextCard">{props.title}</p>
          <p className="bottomTextCard">{props.author}</p>
        </>
      )}
    </div>
  );
}

export default Entry;
