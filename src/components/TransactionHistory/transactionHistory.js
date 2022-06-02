import PropTypes from 'prop-types';
import Transaction from './transaction';
import s from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={s.tbody}>
        {items.map(item => (
          <Transaction
            key={item.id}
            id={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
}
TransactionHistory.protoType = {
  items: PropTypes.array.isRequired,
};