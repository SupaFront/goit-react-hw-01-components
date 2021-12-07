import dataSet from './data';
import Profile from './components/Profile'
import Statistics from './components/Statistics';
import FriendList from './components/Friends'
import TransactionHistory from './components/Transactions'
import './reset.css'

import './App.css';
const { user, data, friends, transactions } = dataSet;

function App() {
  return (
    <div className="App">
    <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;


