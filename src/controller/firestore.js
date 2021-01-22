import firebase from './firebaseConfig';


// COLECCION EN FIRESTORE - ADD ORDER

const collectionSocios = () => firebase.firestore().collection('Socios');

// // AGREGAR DOCS A LA COLECCION
export const addSocios = (material) => new Promise((res) => {
  collectionSocios().add(material)
    .then((doc) => {
      res(doc);
      console.log('Añadido con exito');
    })
    .catch((err) => {
      console.log(err);
    });
});

export default addSocios;