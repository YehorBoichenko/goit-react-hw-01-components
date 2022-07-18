import user from '../Data/User.json';
import Profile from './Profile/User-profile';

import statisticsData from '../Data/Data.json';
import Statistics from './Statistic-section/Statistics'; 

import friends from '../Data/Friends.json';
import ListOfFriends from './Friends-list/List';

import transactions from '../Data/Transactions.json';
import History from './Transactions-history/History';

function App() {
  return (<div>
    <Profile

      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statisticsData} />
    <ListOfFriends friends={friends} />
    <History items={transactions}/>
  </div>
  );
}


export default App;