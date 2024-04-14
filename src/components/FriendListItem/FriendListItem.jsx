export default function FriendListItem({ friends }) {
  return (
    <li key={friends.id}>
      <div>
        <img src={friends.avatar} alt="Avatar" width="48" />
        <p>{friends.name}</p>
        <p>{friends.isOnline ? "Online" : "Offline"}</p>
      </div>
    </li>
  );
}
