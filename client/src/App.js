import Purchases from "./Pages/Purchases";
import UserProvider from './context/PurchaseContext'

function App() {
  return (
    <div className="container">
      <UserProvider>
       <Purchases/>
      </UserProvider>
    </div>
  );
}

export default App;
