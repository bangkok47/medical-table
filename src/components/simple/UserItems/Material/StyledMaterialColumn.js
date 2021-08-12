import styled from "styled-components";

export const MaterialTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 25px 30px;

  span {
    font-size: 12px;
    font-weight: bold;
    background: #0694f9;
    border-radius: 5px;
  }

  h5 {
    font-weight: 400;
  }
`;

export const MaterialBody = styled.div`
  direction: rtl;
  margin: 40px 30px;
  font-size: 12px;

  p {
    margin-bottom: 10px;

    span {
      background: coral;
      border-radius: 5px;
    }
  }

  ul {
    margin: 13px;
    li {
      margin: 20px;
      margin-bottom: 20px;
      padding-right: 20px;
      list-style-type: "הייטק";

      ::marker {
        font-weight: 600;
      }

      span {
        background: #1b397e;
        border-radius: 5px;
      }
    }
  }
`;
