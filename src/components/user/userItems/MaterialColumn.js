import React from "react";
import styled from "styled-components";

import { ItemTitle } from "./ItemTitle";
import { ItemBody } from "./ItemBody";

const MaterialTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 25px 30px;

  span {
    font-size: 12px;
    font-weight: bold;
    background: #42b1ff;
    border-radius: 5px;
  }

  h5 {
    font-weight: 400;
  }
`;

const MaterialBody = styled.div`
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

function MaterialColumn(props) {
  return (
    <>
      <ItemTitle {...props} />
      <ItemBody>
        <MaterialTitle>
          <span>1.2.2019</span>
          <h5>Maccabi - Dr. Doctor</h5>
          <div></div>
        </MaterialTitle>

        <MaterialBody>
          <p>קיריל אנטו</p>
          <p>אני מביע את תודתי לך ולעמיתיך על הזריזות</p>

          <ul>
            <li>
              אני מביע את תודתי לך ולעמיתיך על הזריזות והתוצאות המעולות במתן
              טיפול רפואי הייטק. רמת הבקיאות שלך בטכנולוגיות כאלה מאפיינת אותך
              כמומחים העונים על הדרישות החמורות ביותר של הרפואה המודרנית,
              הנכונות לדברים חדשים, מוכנים לעולם לא לעצור בדרך למצוינות מקצועית.
            </li>
            <li>
              רמת הבקיאות שלך בטכנולוגיות כאלה מאפיינת אותך כמומחים העונים על
              הדרישות החמורות ביותר של הרפואה המודרנית, הנכונות לדברים חדשים,
              מוכנים לעולם לא לעצור בדרך למצוינות מקצועית. בתחום חשוב זה משרת את
              טובת המטופלים, עוזר להציל חיים ולהשיב בריאות אבדות לאנשים במקרים
              שנראו חסרי תקווה עד לאחרונה.
            </li>
            <li>
              כל מה שאתה עושה בתחום חשוב זה משרת את טובת המטופלים, עוזר להציל
              חיים ולהשיב בריאות אבדות לאנשים במקרים שנראו חסרי
              <span>תקווה עד לאחרונה.</span>
            </li>
          </ul>
          <p>
            כל מה שאתה עושה בתחום חשוב זה משרת את טובת המטופלים, עוזר להציל חיים
            ולהשיב בריאות אבדותי לאנשים במקרים שנראו חסר כל מה שאתה עושה בתחום
            חשוב זה משרת את טובת המטופ
            <span>תקווה עד לאחרונה.</span>
          </p>
        </MaterialBody>
      </ItemBody>
    </>
  );
}

export default MaterialColumn;
