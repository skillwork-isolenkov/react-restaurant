import latestRecipes from '../img/blog/latest-recipes.jpg'
import newRecruits from '../img/blog/new-recruits .jpg'
import bakingTips from '../img/blog/baking-tips.jpg'
import eggs from '../img/blog/eggs.jpg'
import { Link } from 'react-router-dom'

const Blog = () => {
    return (
        <div className="blog">
            <h2>Our Blog</h2>

            <div className="first-line">
                <div className="latest-recipes">
                    <img src={latestRecipes} alt="latestRecipes" />
                    <div className="first-blog">
                        <h4>25 November, 2022</h4>
                        <hr />
                        <p>Latest Recipes Just In!</p>
                        <hr />
                        <span>BY John Dogget</span>
                    </div>
                </div>
                <div className="new-recruits">
                    <img src={newRecruits} alt="newRecruits" />
                    <div className="second-blog">
                        <h4>14 April, 1999</h4>
                        <hr />
                        <p>New Recruits have arrived!</p>
                        <hr />
                        <span>BY Jeffrey Spender</span>
                    </div>
                </div>
            </div>

            <div className="second-line">
                <div className="baking-tips">
                    <img src={bakingTips} alt="bakingTips" />
                    <div className="third-blog">
                        <h4>8 October, 2022</h4>
                        <hr />
                        <p>Baking Tips from the pros!</p>
                        <hr />
                        <span>BY Ivan Solenkov</span>
                    </div>
                </div>
                <div className="eggs">
                    <img src={eggs} alt="eggs" />
                    <div className="fourth-blog">
                        <h4>13 March, 2020</h4>
                        <hr />
                        <p>All Your Eggs Belong to us!</p>
                        <hr />
                        <span>BY John Dogget</span>
                    </div>
                </div>
            </div>

            <Link to="/home" className="btn">View The Blog</Link>
        </div>
    );
}

export default Blog;