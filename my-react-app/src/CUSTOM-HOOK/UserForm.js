import React from "react";
import useInput from "./useInput";

function UserForm() {
  // const [firstName,setFirstName] = useState('')
  // const [lastName,setlasttName] = useState('')

  //replace use tate call for first and last name
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();

    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <lable>FirstName</lable>
          <input {...bindFirstName} type="text" />
        </div>
        <div>
          <lable>LastName</lable>
          <input {...bindLastName} type="text" />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}

export default UserForm;
