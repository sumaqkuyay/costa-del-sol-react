import React from 'react';
import { Link } from 'react-router-dom';

const VigilantButton = ({ name, reference, classbtn }) => (
  <div>
    <Link to={reference}>
      <button className={classbtn} type="button">
        {name}
      </button>
    </Link>
  </div>
);
export default VigilantButton;