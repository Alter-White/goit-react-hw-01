import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map((element) => {
        return <FriendListItem key={element.id} friends={element} />;
      })}
    </ul>
  );
}
