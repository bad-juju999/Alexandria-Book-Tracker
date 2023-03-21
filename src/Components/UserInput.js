//need a way to make sure u can't enter same title and author multiple times

import { addDoc, CollectionReference, getFirestore, collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import Entry from "../Components/Entry";

function UserInput() {
  const [entryDisplay, setEntryDisplay] = useState([]);

  useEffect(() => {
    const myDatabase = getFirestore();
    const collectionReference = collection(myDatabase, "Books");

    getDocs(collectionReference).then((snapshot) => {
      const bookArray = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setEntryDisplay(bookArray.map((book) => 
      <Entry 
        key={book.id} 
        title={book.Title} 
        author={book.Author} 
        character={book.Character} 
        details={book.Details}
        
        {...book} //do i need this anymore?
      />
      ));
    });
  }, []);

  return (
    <div>
      <div className="inputContainer flex-center">
        <form className="flex-center">
          <label htmlFor="Title Name">Title Name:</label>
          <input type="text" id="titleInput"/>

          <label htmlFor="Author Name">Author Name:</label>
          <input type="text" id="authorInput"/>

          <label htmlFor="Favorite Character">Favorite Character:</label>
          <input type="text" id="favCharacterInput" />

          <label htmlFor="Description & Extra Details">Description & Extra Details:</label>
          <input type="text" id="detailsInput"/>
        </form>
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
              setEntryDisplay([...entryDisplay, 
              <Entry 
              key={newEntry + newAuthor} 
              title={newEntry} 
              author={newAuthor} 
              character={newCharacter} 
              details={newDetails} />]);
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
