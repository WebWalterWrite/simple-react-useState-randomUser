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
  transition: all .3s ease-in-out;
  :hover{
    transition: all .3s ease-in-out;
    background-image: url('${props => props.img}');
    background-size:cover;
    background-position:center;
    background-color:none;
    img{
      visibility:hidden;
    }
`;

export const DataUser = styled.div`
  width: 100%;
  text-align: center;
  color: #ffffff;
  div:nth-child(2n) {
    background-color: white;
    border-radius: 8px;
    padding: 4px;
    margin: 5px 0 5px 0;
    color: ${props => props.color};
    font-weight: bold;
  }
  img {
    border-radius: 50%;
    border: solid 2px #ffffff;
  }
`;
