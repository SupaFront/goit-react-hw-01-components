import style from "./Friends.module.css";
import PropTypes from 'prop-types';
import FriendListItem from "./FriendInn/FriendListItem";

function FriendList({ friends }) {
  return (
    <ul className={style.list}>
      {friends.map((friend) => {
        const { avatar, name, isOnline, id } = friend;
        return (
          <FriendListItem
            name={name}
            avatar={avatar}
            isOnline={isOnline}
            key={id}
          />
        );
      })}
    </ul>);
}
export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape),
}
