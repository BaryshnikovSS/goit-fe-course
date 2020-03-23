import React from "react";
import PropTypes from "prop-types";
import css from './Profile.module.css'

// Компонент должен иметь один проп user, в котором он ожидает объект с информацией о пользователе:

// name — имя пользователя
// tag — тег в социальной сети без @
// location — город и страна
// avatar — url на изображение
// stats — объект с информацией об активности
// Компонент должен создавать DOM элемент следующей структуры.

const Profile = ({ user }) => {
  const { name, avatar, location, tag, stats } = user;
  return (
    <>
      <div className={css.profile}>
        <div className={css.description}>
          <img src={avatar} alt="user avatar" className={css.avatar} />
          <h2 className={css.name}>{name}</h2>
          <p className="tag">@{tag}</p>
          <p className="location">{location}</p>
        </div>

        <ul className={css.stats}>
          <li>
            <span className={css.label}>Followers</span>
            <span className="quantity">{stats.followers}</span>
          </li>
          <li>
            <span className={css.label}>Views</span>
            <span className="quantity">{stats.views}</span>
          </li>
          <li>
            <span className={css.label}>Likes</span>
            <span className="quantity">{stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string,
    location: PropTypes.string,
    tag: PropTypes.string,
    // stats: PropTypes.string, // проверка типизации 
    stats: PropTypes.object
    
  })
};
