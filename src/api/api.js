import { db } from "../firebase";

import store from '../redux/store';
import { fetchAnime } from "../redux/actions/anime";


/*export function get(collection) {
  return db
    .collection(collection)
    .get()
    .then((snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return items;
    });
}

*/

const dataTemplate = {
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
}

export function createUser(userId) {
  return db.collection("users").doc(userId).set({ dataTemplate });
}

export function addAnime(listIndex, newValue, activeList) {
  db.collection("users").doc('0').get().then(doc => {
    const userArr = doc.data();
    userArr[listIndex].push(newValue);
    db.collection("users").doc('0').set(userArr);
    store.dispatch(fetchAnime(activeList, 0));
  })
}

/*export function addAnime(userId, listIndex, newValue) {
  db.collection("users").doc(userId).onSnapshot((doc) => {
    //console.log(doc, " data: ", doc.data());
    const userArr = doc.data();
    userArr[listIndex].push(newValue);
   // return db.collection("users").doc(userId).set(userArr);
  })
}*/


export function transferAnime(animeId, oldList, newList) {
  
  db.collection("users").doc('0').get().then(doc => {
    const userArr = doc.data();
    userArr[oldList] = userArr[oldList].filter(e => e !== animeId);
    userArr[newList].push(animeId);
    db.collection("users").doc('0').set(userArr);
    store.dispatch(fetchAnime(oldList, 0));
  })

}

export function deleteAnime(animeId, oldList) {
  db.collection("users").doc('0').get().then(doc => {
    const userArr = doc.data();
    userArr[oldList] = userArr[oldList].filter(e => e !== animeId);
    db.collection("users").doc('0').set(userArr);
    store.dispatch(fetchAnime(oldList, 0));
  })
}

export function getUser(activeUser) {
  const docRef = db.collection("users").doc("0");
  return docRef
    .get()
    .then(function (doc) {
      return doc.data();
    })
    .catch(function (error) {
      console.log("Error getting document:", error);
    });
}

/*function mapSnapshot(snapshot) {
  return snapshot.docs.map(mapDoc);
}

function mapDoc(doc) {
  return {
    id: doc.id,
    ...doc.data(),
  };
}*/
