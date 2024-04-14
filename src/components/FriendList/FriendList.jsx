import FriendListItem from "../FriendListItem/FriendListItem";

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((element) => {
        return <FriendListItem key={element.id} friends={element} />;
      })}
    </ul>
  );
}
