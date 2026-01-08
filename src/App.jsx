import React from "react";
import LocalForm from "./Components/LocalForm";
import LocalList from "./Components/LocalList";
import LocalContainer from "./Components/LocalContainer";

const App = () => {
  return (
    <>
      <LocalContainer>
        <LocalForm />
        <LocalList />
      </LocalContainer>
    </>
  );
};

export default App;