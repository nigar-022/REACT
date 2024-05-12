import React from "react";
import CompF from "./CompF";
import { UserConsumer } from "./UserContext";

class CompE extends React.Component {
  
  render() {
    return (
      <>
      <UserConsumer>

      {

        userName => {
            return <div>Hello {userName}</div>
        }
      }

      </UserConsumer>
      
      </>
    );
  }
}

export default CompE;
