// Write your JS code here
import './index.css'

const profileName = 'Wade warren'
const role = 'Software Developer at UK'

const UserInfo = () => (
  <div className="user-info">
    <img
      src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
      alt="profile"
      className="user-profile"
    />
    <h1 className="user-name">{profileName}</h1>
    <p className="user-role">{role}</p>
  </div>
)

export default UserInfo
