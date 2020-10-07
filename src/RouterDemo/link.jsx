import React from 'react';
import { Link } from 'react-router-dom';
export default () => {
  return (
    <div>
      <Link to="/home">home</Link>
      -----------
      <Link to="/home/mine">mine</Link>
    </div>
  )
}
