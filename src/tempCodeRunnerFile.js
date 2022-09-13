 const app=initializeApp(firebaseConfig);

  const db=app.firestore();

  const auth=app.auth();


  export {db,auth};