
import { Auth0Provider } from '@auth0/auth0-react'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Routes from './Routes/Routes';


function App() {
  return (
<Auth0Provider
    domain="autopart1.us.auth0.com"
    clientId="F6BS0buIsNYU2MjvQNGhXvh5s2i9GORQ"
    redirectUri={window.location.origin}>
  <Routes />  
  </Auth0Provider>
  );
}

export default App;
