import {  useParams } from "react-router-dom";
// import Pages from "../pages/Pages.json"
// import { CardProps } from '../types/interfaces'

function Topic() {
   let { infoId } = useParams()
    return (
      <div>
          <h1>{infoId}</h1>
          
          {/* {Pages.activities.map((card: CardProps) => (
            <p>{card.description}</p>
          ))} */}

      </div>
    );
  }

  export default Topic