import './App.css';
import Chart from './components/Chart';
import Header from './components/Header';

 let chartarr=[
  {
    "day": "mon",
    "amount": 17.45
  },
  {
    "day": "tue",
    "amount": 34.91
  },
  {
    "day": "wed",
    "amount": 52.36
  },
  {
    "day": "thu",
    "amount": 31.07
  },
  {
    "day": "fri",
    "amount": 23.39
  },
  {
    "day": "sat",
    "amount": 43.28
  },
  {
    "day": "sun",
    "amount": 25.48
  }
]
function App() {
  return (
    <div className="App">
      <Header/>
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