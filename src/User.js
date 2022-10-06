export default function User({ getUser, userName, userPic }) {
    return (
      <div className="user-wrapper">
        <img
          src={userPic?.large}
          alt="avatar"
        />
        <p className="user-info">{userName ? (`${userName?.title} ${userName?.first} ${userName?.last}`) : ''}</p>
  
        <button onClick={getUser}>Get random user</button>
      </div>
    );
  }
  