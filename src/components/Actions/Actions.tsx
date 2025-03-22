import './Actions.css';

const actions = [
  { icon: 'crop_free', label: 'Pix' },
  { icon: 'ballot', label: 'Pagar' },
  { icon: 'swap_horiz', label: 'Transferir' },
  { icon: 'account_balance', label: 'Depositar' },
];

export const Actions = () => {
  return (
    <div className="actions">
      {actions.map((action) => (
        <button key={action.label} className="action-button">
          <span className="material-icons">{action.icon}</span>
          <span>{action.label}</span>
        </button>
      ))}
    </div>
  );
};
