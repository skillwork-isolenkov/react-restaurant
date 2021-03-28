import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <h2>Art of cooking</h2>
            <p>The best restaurant in town</p>
            <Link to="/reservation" className="btn">Book my table</Link>
        </div>
    );
}

export default Home;