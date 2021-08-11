import styled from "styled-components";

export const UserContainer = styled.div`
  max-width: 1400px;
  margin: auto;
  margin-top: 35px;
  background: white;

  display: grid;
  grid-template-areas: "notes material results";
  grid-template-columns: [notes] 1fr [material] 2.5fr [results] 1fr;

  grid-gap: 15px;
`;
