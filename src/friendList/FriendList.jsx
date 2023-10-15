import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import clsx from 'clsx';

export default function FriendList({ friends }) {
  return (
    <ul className={css['friend-list']}>
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        />
      ))}
    </ul>
  );
}

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={css.item}>
      <span className={clsx([css.status], isOnline && [css.isOnline])}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
