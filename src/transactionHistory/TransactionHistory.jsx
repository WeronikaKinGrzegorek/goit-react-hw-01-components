import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export default function TransactionHistory({ items }) {
  return (
    <table className={css['transaction-history']}>
      <thead className={css.thead}>
        <tr className={css.theadTr}>
          <th className={css.theadTh}>Type</th>
          <th className={css.theadTh}>Amount</th>
          <th className={css.theadTh}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} className={css.tbodyTr}>
              <td className={css.tbodyTd}>{type}</td>
              <td className={css.tbodyTd}>{amount}</td>
              <td className={css.tbodyTd}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
