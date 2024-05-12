import React from "react";
import CompC from "./CompC";
import { UserProvider } from "./UserContext";

class AppComp extends React.Component {
  
  render() {
    return (
      <>
      <UserProvider value='Nigar'>

       <CompC />
      </UserProvider>
      </>
    );
  }
}

export default AppComp;
