import PropTypes from 'prop-types';
import style from './Friends.module.css';

export default function Friends({ avatar, name, isOnline }) {
  const status = isOnline ? style.Online : style.Offline;
  return (
    <li className={style.item}>
      <span className={status}>{isOnline}</span>
      <img className={style.avatar} src={avatar} alt="" width="50" />
      <p className={style.name}>{name}</p>
    </li>
  );
}
Friends.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
