import css from "./TransactionHistory.module.css";

export default function TransactionHistory(props) {
  return (
    <table className={css.transactionTable}>
      <thead>
        <tr>
          <th className={css.tableHead}>Type</th>
          <th className={css.tableHead}>Amount</th>
          <th className={css.tableHead}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {props.items.map((element) => {
          return (
            <tr className={css.tableRows} key={element.id}>
              <td className={css.tableItem}>{element.type}</td>
              <td className={css.tableItem}>{element.amount}</td>
              <td className={css.tableItem}>{element.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
