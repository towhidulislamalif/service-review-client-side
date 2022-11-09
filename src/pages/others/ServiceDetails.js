import React from 'react';
import { useLoaderData } from 'react-router-dom';

function ServiceDetails() {
  const service = useLoaderData();
  console.log(service);
  return <div>ServiceDetails</div>;
}

export default ServiceDetails;
