import React, { useEffect, useState, lazy, Suspense } from "react";

// import fetch query
import { getUsers } from "../utils/fetch";

// import component
const AllUsers = lazy(() => import("./AllUsers"));

/*
Afficher les users 
*/
export default () => {
  // Créer le state users.
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);

  // Récupérer les données lors du montage du component.
  useEffect(
    () => {
      (async () => {
        setUsers(await getUsers());
      })();
    },
    [user]
  );
  return (
    <section>
      <h1>All Users</h1>

      <Suspense fallback={<h1>Chargement des profils en cours...</h1>}>
        <AllUsers users={users} />
      </Suspense>
    </section>
  );
};
