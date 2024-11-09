// src/PropertyDetails.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
// import { properties } from './data';
import properties from '../Properties.json'


const PropertyDetails = () => {
  const { title } = useParams();
  const property = properties.find((prop) => prop.Title === title);

  if (!property) {
    return <h2>Property not found</h2>;
  }

  return (
    <div>
      <h1>{property.PropertyName}</h1>
      <img src={property.imagesrc} alt={property.PropertyName} width="400" />
      <p><strong>Location:</strong> {property.Location}</p>
      <p><strong>Size:</strong> {property.Size}</p>
      <p><strong>Price:</strong> {property.Price}</p>
      <p><strong>Amenities:</strong> {property.Amenities}</p>
      <p><strong>Description:</strong> {property.Description}</p>
      <Link to='/' className='bg-blue-300 p-2 rounded-lg'> Back</Link>
    </div>
  );
};

export default PropertyDetails;
