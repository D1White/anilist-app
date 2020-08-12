import { db, auth } from "../firebase";

import store from '../redux/store';
import { fetchAnime } from "../redux/actions/anime";


/*export function get() {
  return db
    .collection('users')
    .get()
    .then((snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return items;
    });
}*/

let aUID = '';


auth.onAuthStateChanged((user) => {

  if (user) {
    aUID = user.uid;
  }

})



/*const dataTemplate = {
  "user": 
    {
      "id": "",
      "avaImageUrl": "",
      "name": "",
      "mail": ""
    }
  ,
  "0": [],
  "1": [],
  "2": [],
  "3": [],
  "4": []
}*/

export function createUser(userId) {
  return db.collection("users").doc(aUID).set({
    "userInfo": 
      {
        "id": `${auth.currentUser.uid}`,
        "avaImageUrl": `${auth.currentUser.photoURL}`,
        "name": `${auth.currentUser.displayName}`,
        "mail": `${auth.currentUser.email}`,
      }
    ,
    "0": [],
    "1": [],
    "2": [],
    "3": [],
    "4": [],
  });
}

export function addAnime(listIndex, newValue, activeList) {

  db.collection("users").doc(aUID).get().then(doc => {
    const userArr = doc.data();
    userArr[listIndex].push(newValue);
    db.collection("users").doc(aUID).set(userArr);
    store.dispatch(fetchAnime(activeList, 0));
  })
}




export function transferAnime(animeId, oldList, newList) {
  
  db.collection("users").doc(aUID).get().then(doc => {
    const userArr = doc.data();
    userArr[oldList] = userArr[oldList].filter(e => e !== animeId);
    userArr[newList].push(animeId);
    db.collection("users").doc(aUID).set(userArr);
    store.dispatch(fetchAnime(oldList, 0));
  })

}

export function deleteAnime(animeId, oldList) {
  console.log(aUID);
  db.collection("users").doc(aUID).get().then(doc => {
    const userArr = doc.data();
    userArr[oldList] = userArr[oldList].filter(e => e !== animeId);
    db.collection("users").doc(aUID).set(userArr);
    store.dispatch(fetchAnime(oldList, 0));
  })
}

export function getUser(activeUser) {
  
  if (aUID) {
    const docRef = db.collection("users").doc(aUID);
  return docRef
    .get()
    .then(function (doc) {
      return doc.data();
    })
    .catch(function (error) {
      console.log("Error getting document:", error);
    });
  }
}

export function getAllUsers() {
  const tempDoc = [];
  return db
  .collection('users')
  .get()
  .then((snapshot) => {
    snapshot.docs.map((doc) => {
      tempDoc.push(doc.id);
    });
    return tempDoc;
  });

}



