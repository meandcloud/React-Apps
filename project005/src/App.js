import './App.css';

//Import Components

import AccountSummary from './Components/AccountSummary';
import AddTranscation from './Components/AddTranscation';
import Balance from './Components/Balance';
import Header from './Components/Header'
import TranscationHistory from './Components/TranscationHistory';
import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (
    <div>
      <GlobalProvider>
      <Header />
      <div className="container">

        <Balance />
        <AccountSummary />
        <TranscationHistory />
        <AddTranscation />

      </div>
      
      </GlobalProvider>
    </div>
  );
}

export default App;
