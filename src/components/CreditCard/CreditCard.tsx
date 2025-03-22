import { CreditCardInfo } from '../../types';
import './CreditCard.css';

interface CreditCardProps {
  creditCardInfo: CreditCardInfo;
}

export const CreditCard = ({ creditCardInfo }: CreditCardProps) => {
  return (
    <section className="credit-card-section">
      <div className="section-header">
        <h2>Cartão de crédito</h2>
        <span className="material-icons">chevron_right</span>
      </div>
      <div className="invoice">
        <span className="invoice-label">Fatura atual</span>
        <span className="invoice-value">
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(creditCardInfo.currentInvoice)}
        </span>
      </div>
    </section>
  );
};
