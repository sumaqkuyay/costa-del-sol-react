import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Exit =()=>{
  return(
    <div className="section-entry"> 
      <div className="search-socios">
        <input placeholder="Buscar " required />
      </div>
     
      <div className="list-socios overflow-auto">
        <ListGroup >
          <input type="checkbox" required />
          <ListGroup.Item>NameSocio</ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );

};
export default Exit;