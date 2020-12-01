import React from 'react';
import { Button } from '@material-ui/core';
import {useGoogleLogout} from 'react-google-login';


const clientId = '192957603795-50lfojvn8uq2nn75pmaj081m40pujsl6.apps.googleusercontent.com';


export default function SignOut() {
  
   const onLogoutSuccess = (res) => {
     alert('Loggedout Successfully');
   };

   const onFailure = () => {
     console.log ('Handle failure cases');
   };

   const {signOut} = useGoogleLogout({
     clientId,
     onLogoutSuccess,
     onFailure,

   });


  return (

    <div>
      <Button onClick={signOut} size = "small">
        Logout

      </Button>

    </div>

  
  );
}