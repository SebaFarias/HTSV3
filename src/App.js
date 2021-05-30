import './App.css';
import SearchForm from './components/searchForm/SearchForm'
import Layout from './components/Layout/Layout'
import UserCard from './components/UserCard/UserCard'
import ReposGrid from './components/ReposGrid/ReposGrid'
import { GithubUserProvider } from './context/GithubUserContext'

function App() {
  return (
    <GithubUserProvider>
      <Layout>
        <SearchForm/>
        <UserCard/>
        <ReposGrid/>
      </Layout>
    </GithubUserProvider>
  );
}

export default App;
