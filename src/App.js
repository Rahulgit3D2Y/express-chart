import './App.css';
import Chart from './components/Chart';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <br />
      <Chart/>
    </div>
  );
}

export default App;
/*
{
  chartarr.map(item=>{return <Chart name={item.day} amount={item.amount} />})
 }
*/