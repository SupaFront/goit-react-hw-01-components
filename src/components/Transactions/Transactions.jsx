import style from './Transactions.module.css';
import PropTypes from 'prop-types';

function TransactionHistory({items}) {
const elements = items.map(transaction => 
    <tr key={transaction.id}>
      <td>{transaction.type}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.currency}</td>
            </tr>)
             
    return (<table className={style.table}>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
        <tbody>
            {elements}
        </tbody>
    </table>);
}
export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};