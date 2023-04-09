//need a way to make sure u can't enter same title and author multiple times

import { addDoc, CollectionReference, getFirestore, collection, getDocs, doc, deleteDoc} from "firebase/firestore";
import { useState, useEffect } from "react";
import Entry from "../Components/Entry";

function UserInput() {

  //on render current database is displayed through grid of <Entry/> components
  const [entryDisplay, setEntryDisplay] = useState([]);
  const myDatabase = getFirestore();
  const collectionReference = collection(myDatabase, "Books");

  useEffect(() => {
    
    getDocs(collectionReference).then((snapshot) => {
      const bookArray = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setEntryDisplay(bookArray.map((book) => 
      <Entry 
        key={book.id} 
        title={book.Title} 
        author={book.Author} 
        character={book.Character} 
        details={book.Details}
        {...book} //is this line doing anything anymore? If not, delete
      />
      ));
    });
  },[]);

  return (
    <div>
      <div className="inputContainer flex-center">
        <form className="userForm flex-center">
          <label htmlFor="User Input">Title Name:</label>
          <input type="text" id="titleInput"/>

          <label htmlFor="User Input">Author Name:</label>
          <input type="text" id="authorInput"/>

          <label htmlFor="User Input">Favorite Character:</label>
          <input type="text" id="favCharacterInput" />

          <label htmlFor="User Input">Description & Extra Details:</label>
          <input type="text" id="detailsInput"/>
        </form>
        
        {/*adds database entry from UserInput and then displays it in the DOM on the entryDisplay grid */}
        <button
          className="submitButton"
          onClick={() => {
            let newEntry = document.querySelector("#titleInput").value;
            let newAuthor = document.querySelector("#authorInput").value;
            let newCharacter = document.querySelector("#favCharacterInput").value;
            let newDetails = document.querySelector("#detailsInput").value;

            const myDatabase = getFirestore();
            const collectionReference = collection(myDatabase, "Books");

            addDoc(collectionReference, {
              Title: newEntry,
              Author: newAuthor,
              Character: newCharacter,
              Details: newDetails,
            }).then(() => {
              setEntryDisplay([ 
              <Entry 
              key={newEntry + newAuthor} 
              title={newEntry} 
              author={newAuthor} 
              character={newCharacter} 
              details={newDetails} />,
              ...entryDisplay
            ]);

            //add functionality to clear form after submit
            //document.querySelector('#userForm').reset(); not working, need alternate method
            });
          }}
        >
          Submit
        </button>
        
      </div>
      <div className="grid">{entryDisplay}</div>
    </div>
  );
}

export default UserInput;
