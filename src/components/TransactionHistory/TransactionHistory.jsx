export default function TransactionHistory(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {props.items.map((element) => {
          return (
            <tr key={element.id}>
              <td>{element.type}</td>
              <td>{element.amount}</td>
              <td>{element.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
