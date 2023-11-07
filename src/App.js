import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';


function App() {

  function handleCallbackResponse(response){
    console.log("Encoded JWT ID Token: " + response.credential);
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "493859970133-ipite8muqakco8fj0a829uq67k9c71g7.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large"}
    );
  }, []);

  return (
    <div className="App">
      <div id = "signInDiv"></div>
    </div>
  );
}

export default App;
