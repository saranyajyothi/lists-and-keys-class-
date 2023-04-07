import UserProfile from './components/UserProfile'
import './App.css'

const UserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Rahul',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Rahul',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Rahul',
    role: 'Software Developer',
  },
]

const App = () => (
  <div className="user-container">
    <h1 className="title">User List</h1>
    <ul>
      {UserDetailsList.map(eachItem => (
        <UserProfile UserDetails={eachItem} key={eachItem.uniqueNo} />
      ))}
    </ul>
  </div>
)

export default App
