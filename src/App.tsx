import { Header } from './components/Header/Header';
import { Account } from './components/Account/Account';
import { Actions } from './components/Actions/Actions';
import { CreditCard } from './components/CreditCard/CreditCard';
import { Navigation } from './components/Navigation/Navigation';
import './styles/global.css';

function App() {
  const mockData = {
    userInfo: {
      name: 'Gabriela'
    },
    accountInfo: {
      balance: 800.25
    },
    creditCardInfo: {
      currentInvoice: 680.40
    }
  };

  return (
    <div className="app">
      <Header userInfo={mockData.userInfo} />
      <main className="main-content">
        <Account accountInfo={mockData.accountInfo} />
        <Actions />
        
        <div className="my-cards">
          <span className="material-icons">credit_card</span>
          <span>Meus cartões</span>
        </div>

        <div className="info-card">
          <p>E você, o que vai fazer com seu <span className="highlight">Pedacinho</span>? Decida agora!</p>
        </div>

        <CreditCard creditCardInfo={mockData.creditCardInfo} />
      </main>
      <Navigation />
    </div>
  );
}

export default App;
