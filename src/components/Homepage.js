import React from "react";
import { Link } from "react-router-dom";

import elem from "styled-components";

const Section = elem.section`
  position:relative;
  background-image: url('https://c.pxhere.com/photos/e7/07/jam_new_york_taxi_manhattan_chaos_big_apple-546336.jpg!d');
  background-repeat: no-repeat;
  background-size: cover;
  background-position:center;
  height:100vh;
  >div:first-child{
    position:absolute;
    background-color:#FFFFFF;
    height: 100vh;
    width:100vw;
    opacity: .3;
    z-index:0;
  } 
`;

const Select = elem.div`
    position:absolute;
    width: 100vw;
    top:20%;
    z-index:999;
    text-align:center;
    h2{
      font-size:48px;
      margin-bottom:20px;
      color: #FFFFFF;
      text-shadow: 4px 3px #737373;
    }
    p{
      width:20%;
      padding:8px;
      font-weight:bold;
      font-size:22px;
      border-radius:20px;
      margin: 0 auto;
      cursor:pointer;
      :hover{
        border:solid 3px #FFFFFF;
        padding:5px;
      }
      a{
        color:#FFFFFF;
        text-decoration:none;
      }
      :nth-child(2n){
        background-color: #329af0;
        margin-bottom:15px;
      }
      :nth-child(3n){
        background-color: pink;
      }
    }

`;

export default () => {
  return (
    <Section>
      <div />
      <Select>
        <h2>Je recherche</h2>
        <p>
          <Link to="profils/homme">un Homme</Link>
        </p>
        <p>
          <Link to="profils/femme">une Femme</Link>
        </p>
      </Select>
    </Section>
  );
};
