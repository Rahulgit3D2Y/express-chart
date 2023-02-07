import propes from "react";
function Chart(propes)
{
    return(
        <div className="container">
            <div className="chead">
                <h2>Spending - Last 7 days</h2>
            </div>
            <div className="bars">
                <div className="bar-info">
                    {propes.amount}
                    <div className="bar"></div>
                    {propes.name}
                </div>
            </div>
            <hr />
            <div className="cfooter">
                <h4>Total this month</h4>
                <div className="ProfitLoss">
                    <h2>$478.33</h2>
                    <div className="incDec">
                        <h5>+2.4%</h5>
                        <h4>from last month</h4>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Chart
/*


mon
tue
wed
thu
fri
sat
sun





*/