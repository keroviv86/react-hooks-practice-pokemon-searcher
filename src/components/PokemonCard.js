import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({id, name, hp, front, back}) {
  const [backPic, setBackPic]= useState(false)

  function handleToggle(){
    setBackPic((backPic)=> !backPic)
  }
  return (
    <Card>
      <div>
        <div className="image" onClick={handleToggle}>
          <img src= {backPic ? back : front} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
