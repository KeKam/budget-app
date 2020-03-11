import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      This is the 404 component - <Link to='/'>Go home</Link>
    </div>
  );
};

export default NotFound;
