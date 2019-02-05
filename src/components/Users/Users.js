import React, { useEffect, useState, lazy, Suspense } from "react";

// import fetch query
import { getUsers } from "../../utils/fetch";

// import style
import { Section, Pagination } from './AllUsers.styled';

// import component
const AllUsers = lazy(() => import("./AllUsers"));


/*
Afficher les users 
*/
export default ({ match:{params:{type}} }) => {

  const Gender = () => type === "homme" ? "male" : "female";

  // Créer le state users.
  const [users, setUsers] = useState([]);

  // Récupérer les données lors du montage du component.
  useEffect(() => {
    (async () => {
      setUsers(await getUsers(Gender()));
    })();
  }, []);

  return (
    <Section>
      <h2>Recherche</h2>
      <Suspense fallback={<h1>Chargement des profils en cours...</h1>}>
        <AllUsers users={users} />
      </Suspense>

{/* Afficher le nombre de pages */}
      <Pagination color={type === "homme" ? "#329af0" : "pink"}>
         { Array.from(Array(users.length/20), (_,i)=> <span>{i+1}</span>)}
      </Pagination>
    </Section>
  );
};
