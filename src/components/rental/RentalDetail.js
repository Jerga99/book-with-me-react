import React from 'react';
import { Axios } from '../../services/axios';

export function RentalDetail({match}) {
  return <h1> Details View { match.params.id } </h1>
}
