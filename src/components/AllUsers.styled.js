import styled from "styled-components";

export const UsersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

export const UserContainer = styled.div`
  margin: 0.5em;
  background-color: ${props => props.color};
  padding: 1em;
  border-radius: 8px;
`;

export const DataUser = styled.div`
  width: 100%;
  img {
    border-radius: 50%;
  }
`;
