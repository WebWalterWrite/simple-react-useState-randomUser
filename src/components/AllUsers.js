import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons/";

// import styles
import { UsersContainer, UserContainer, DataUser } from "./AllUsers.styled";

// import fetch query
import { getUsers } from "../utils/fetch";

/*
Afficher les users 
*/

export default () => {
  // Créer le state users.
  const [users, setUsers] = useState([]);

  // Récupérer les données lors du montage du component.
  useEffect(() => {
    (async () => {
      setUsers(await getUsers());
    })();
  }, []);
  console.log(users);
  return (
    <section>
      <h1>All Users</h1>
      <UsersContainer>
        {users.map(
          (
            {
              picture: { large },
              location: { city },
              login: { username },
              gender
            },
            k
          ) => {
            return (
              <UserContainer
                key={k}
                color={gender === "male" ? "#329af0" : "pink"}
              >
                <DataUser>
                  <img src={large} alt="user profil" width="200" height="200" />

                  <div>
                    <p>{username}</p>
                  </div>

                  <div>
                    <FontAwesomeIcon icon={faSearchLocation} size="1x" />
                    <p>{city}</p>
                  </div>
                </DataUser>
              </UserContainer>
            );
          }
        )}
      </UsersContainer>
    </section>
  );
};
