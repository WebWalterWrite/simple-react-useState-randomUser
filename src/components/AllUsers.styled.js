import styled from "styled-components";

export const UsersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;
export const DataUser = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  color: #ffffff;
  div:nth-child(2n) {
    background-color: #ffffff;
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

export const UserContainer = styled.div`
  margin: 10px;
  background-color: ${props => props.color};
  padding: 12px;
  border-radius:8px;
  transition: all .3s ease-in-out;
  :hover{
    transition: all .3s ease-in-out;
    background-image: url('${props => props.img}');
    background-size:cover;
    background-position:center;
    background-color:transparent;
    border-radius:0px;
    box-shadow: 5px 5px 15px ${props => props.color};
    img{
      visibility:hidden;
    }
    ${DataUser} div:nth-child(2n){
      position: absolute;
      background-color:rgba(244, 244, 244, 0.3);
      top: 0%;
      left: 0%;
      right: 0%;
      margin:0px;
    }
    ${DataUser} div:nth-child(3n){
        display:none;
      }
`;
