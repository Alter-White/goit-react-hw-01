import css from "./Profile.module.css";

export default function Profile(props) {
  return (
    <div className={css.container}>
      <div className={css.pofileInfo}>
        <img
          className={css.image}
          src={props.image}
          alt="User avatar"
          width={270}
        />
        <p className={css.userName}>{props.name}</p>
        <p className={css.userText}>@{props.tag}</p>
        <p className={css.userText}>{props.location}</p>
      </div>
      <ul className={css.profileList}>
        <li className={css.profileStats}>
          <span>Followers</span>
          <span className={css.profileValue}>{props.stats.followers}</span>
        </li>
        <li className={css.profileStats}>
          <span>Views</span>
          <span className={css.profileValue}>{props.stats.views}</span>
        </li>
        <li className={css.profileStats}>
          <span>Likes</span>
          <span className={css.profileValue}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
