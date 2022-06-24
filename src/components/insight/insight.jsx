import "./style.css";

function Insight() {
    return (
        <div className="insights">
            <h2>Get <span>insights</span> that help <br /> your business grow.</h2>
            <p>Discover the benefits of data analytics and make <br />better decisions regarding revenue, customer <br />experience, and overall efficiency</p>
            <div className="quantity">
                <div className="box">
                    <h3>10k+</h3>
                    <span>COMPANIES</span>
                </div>
                <div className="box">
                    <h3>314</h3>
                    <span>TEMPLATES</span>
                </div>
                <div className="box">
                    <h3>12M+</h3>
                    <span>QUERIES</span>
                </div>
            </div>
        </div>
    );
}
export default Insight;