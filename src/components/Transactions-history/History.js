import PropTypes from 'prop-types';
import Transactions from './Transactions';
import style from './Transactions.module.css';

export default function History({ items }) {
  return (
    <table className={style.transactionHistory}>
      <thead>
        <tr className={style.header}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <Transactions
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
}
History.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
