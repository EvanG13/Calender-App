import './App.css';
import Calendar from './components/Calendar';

const App = () => {
  return (
    <div className="App">
      <Calendar yearNum={2022} />
    </div>
  );
}

export default App;
