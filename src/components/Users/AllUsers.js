import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons/";
// import styles
import { UsersContainer, UserContainer, DataUser } from "./AllUsers.styled";

const AllUsers = ({ users }) => (
  <UsersContainer>
    {users.slice(0,20).map(
      (
        {
          picture: { large }, // user photo
          location: { city }, // location user
          login: { username }, // nickname user
          dob: { age },
          id: { value },
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
            <Link to={`/href/${value}`}>voir son profil</Link>
          </UserContainer>
        );
      }
    )}
  </UsersContainer>
);

export default AllUsers;
