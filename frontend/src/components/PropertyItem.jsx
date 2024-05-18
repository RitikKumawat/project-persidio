import React from 'react';
import { Link } from 'react-router-dom';

const PropertyItem = ({ property }) => {
  return (
    <div>
      <h2>{property.title}</h2>
      <p>{property.description}</p>
      <Link to={`/property/${property.id}`}>View Details</Link>
    </div>
  );
};

export default PropertyItem;