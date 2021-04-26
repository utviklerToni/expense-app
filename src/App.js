import { BrowserRouter } from 'react-router-dom';
import Expense from './components/Expense/Expense';
import Header from './components/Header/Header';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className='container'>
        <div className=''>
          <Expense />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
