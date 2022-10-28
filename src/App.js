import logo from './logo.svg';
import { HashRouter as Router } from 'react-router-dom';
import Routes from './routes';
import { MainLayout } from './layouts';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes />
      </MainLayout>
    </Router>
  );
}

export default App;
