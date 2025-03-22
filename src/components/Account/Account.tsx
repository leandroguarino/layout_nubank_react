import { AccountInfo } from '../../types';
import './Account.css';

interface AccountProps {
  accountInfo: AccountInfo;
}

export const Account = ({ accountInfo }: AccountProps) => {
  return (
    <section className="account-section">
      <div className="section-header">
        <h2>Conta</h2>
        <span className="material-icons">chevron_right</span>
      </div>
      <div className="balance">
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(accountInfo.balance)}
      </div>
    </section>
  );
};
