
import axios from 'axios';
import React, { useState, useEffect } from 'react';

export const CurrentUserLoader = ( { children }) => {

  const [ user, setUser ] = useState(null);

  useEffect( () => {
    ( async () => {
      const response = await axios.get('/api/current-user');
      console.log(response)
      setUser( response.data );
    })()
  }, []);

  // console.log(React.Children)

  return (
    <>
      { React.Children.map( children, child => {
        if ( React.isValidElement( child )) {
          return React.cloneElement( child, { user })
        }
        return child;
      }) }
    </>
  )
}