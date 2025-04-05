import React from "react";
import { ExtReact, Container, Button } from "@sencha/ext-react-modern";

function App() {
  return (
    <ExtReact>
      <Container layout="vbox" padding="20">
        <h1>Welcome to HR Tool</h1>
        <Button text="Click Me" handler={() => alert("Hello from Ext JS!")} />
      </Container>
    </ExtReact>
  );
}

export default App;



