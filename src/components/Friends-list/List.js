import Friends from './Friends';
import PropTypes from 'prop-types';

export default function ListOfFriends({ friends }) {
  return (
    <ul>
      {friends.map(friend => (
        <Friends
          key={friend.id}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
      ))}
    </ul>
  );
}
ListOfFriends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
