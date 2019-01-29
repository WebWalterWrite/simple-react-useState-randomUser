import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons/";
// import styles
import { UsersContainer, UserContainer, DataUser } from "./AllUsers.styled";

const AllUsers = ({ users }) => (
  <UsersContainer>
    {users.map(
      (
        {
          picture: { large }, // user photo
          location: { city }, // location user
          login: { username }, // nickname user
          dob: { age },
          gender // sexe user
        },
        k
      ) => {
        return (
          <UserContainer
            key={k}
            color={gender === "male" ? "#329af0" : "pink"}
            img={large}
          >
            <DataUser color={gender === "male" ? "#329af0" : "pink"}>
              <img src={large} alt="user profil" width="200" height="200" />
              <div>
                <p>{username}</p>
              </div>
              <div>
                <p>{age} ans</p>
                <FontAwesomeIcon icon={faSearchLocation} size="1x" />
                <p>{city}</p>
              </div>
            </DataUser>
          </UserContainer>
        );
      }
    )}
  </UsersContainer>
);

export default AllUsers;
