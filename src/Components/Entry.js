//import { useState } from "react";
import { useState } from "react";
import { getFirestore, deleteDoc, doc } from "firebase/firestore";


function Entry(props) {
  const [backsideVisible, setBacksideVisible] = useState(false);
  return (
    <div
      className="entry flex-center"
      
      onMouseEnter={() => setBacksideVisible(true)}
      onMouseLeave={() => setBacksideVisible(false)}
    >
       {/*deletes specific Entry from backend database.
       //DOES NOT RERENDER CHANGES UNTIL PAGE REFRESH. useState can fix this*/}
       
      <button className="deleteButton" 
          onClick= {()=>{        
            const docRef = doc(getFirestore(), 'Books', props.id);
            deleteDoc(docRef);

          }
          }
      >Delete</button>

      {/*on select of Entry component the user will see backside with additional details of the entry */}
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
