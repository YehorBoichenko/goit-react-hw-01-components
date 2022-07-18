import PropTypes from 'prop-types';
import style from './Transactions.module.css';
export default function Transactions({ type, amount, currency }) {
  return (
    <tr className={style.row}>
      <td className={style.item}>{type}</td>
      <td className={style.item}>{amount}</td>
      <td className={style.item}>{currency}</td>
    </tr>
  );
}
Transactions.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
