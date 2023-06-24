
//import link from "link-react";
//import { CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import {Div} from "react";
import { Card } from "react-bootstrap";



export function Recipe(props) { 


  return (
   <Link to={`/`}>
    <div className="card" style={{width: '18rem'}}>
         <img class="card-img-top" src= {props.Image}  alt={props.Title}/> 
      <div className="card-body col-7 p-1" >
          <h5 className="card-title">{props.Title}</h5>
          <p class="card-text">{props.Instructions.split(' ').slice(0, 25).join(' ')}</p> 
          <a href="#" className="btn btn-primary">More...</a>
        
      </div>
    </div>
            
        
    </Link>
  );
};









