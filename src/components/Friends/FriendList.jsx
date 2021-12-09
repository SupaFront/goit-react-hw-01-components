import style from "./Friends.module.css";
import PropTypes from 'prop-types';
import FriendListItem from "./FriendInn";

function FriendList({ friends }) {
  const elements = friends.map((friend) => {
        const { avatar, name, isOnline, id } = friend;
        
          <FriendListItem
            name={name}
            avatar={avatar}
            isOnline={isOnline}
            key={id}
          />
        
      })
  return (
    <ul className={style.list}>
      {elements}
    </ul>);
}
export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }))
}