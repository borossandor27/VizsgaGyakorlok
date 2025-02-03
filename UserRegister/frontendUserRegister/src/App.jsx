import './App.css'
import UserList from './components/UserList'

/**
 * App component that sets up the main application routes.
 * 
 * @component
 * @returns {JSX.Element} The rendered component.
 * 
 * @example
 * return (
 *   <App />
 * )
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Felhasználók nyilvántartása</h1>
      </header>
      <main>
        <UserList />
      </main>
    </div>
  );
}

export default App
