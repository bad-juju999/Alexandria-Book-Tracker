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
       {/*button to delete the item in database associated with the specific Entry component
       //DOES NOT RERENDER CHANGES. useState can fix this*/}
       
      <button className="deleteButton" 
          onClick= {()=>{        
            const docRef = doc(getFirestore(), 'Books', props.id);
            deleteDoc(docRef);

          }
          }
      >Delete</button>

      {/*on click/ hover of entry the user will see additional details of the entry */}
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
