//import { useState } from "react";
import { useState } from "react";
import { addDoc, CollectionReference, getFirestore, collection, getDocs,deleteDoc,doc } from "firebase/firestore";


function Entry(props) {
  const [backsideVisible, setBacksideVisible] = useState(false);
  return (
    <div
      className="entry flex-center"
      
      onMouseEnter={() => setBacksideVisible(true)}
      onMouseLeave={() => setBacksideVisible(false)}
    >
      <button className="deleteButton" 
      onClick= {()=>{
        //const docRef = doc(myDatabase {this is not accessible in this component}, 'Books', {need the id/ some way to reference specific item in database})
        //deleteDoc(docRef)
      }
      }
      >Delete</button>
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
