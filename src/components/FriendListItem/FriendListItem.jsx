import css from "./FriendListItem.module.css";

export default function FriendListItem({ friends }) {
  return (
    <li className={css.friendItem} key={friends.id}>
      <div className={css.friendInfo}>
        <img src={friends.avatar} alt="Avatar" width="200" />
        <p className={css.friendName}>{friends.name}</p>
        <p className={friends.isOnline ? css.online : css.offline}>
          {friends.isOnline ? "Online" : "Offline"}
        </p>
      </div>
    </li>
  );
}
