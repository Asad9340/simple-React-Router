import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

function App() {
  const navigation = useNavigation();
  return (
    <div>
      <Navbar />
      {navigation.state === 'loading' ? <LoadingSpinner/> : <Outlet />}
      <Footer />
    </div>
  );
}

export default App;
