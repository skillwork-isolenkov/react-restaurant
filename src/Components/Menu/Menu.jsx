import starters from '../img/menu/starters.png'
import mainDishes from '../img/menu/main-dishes.png'
import deserts from '../img/menu/deserts.png'
import drinks from '../img/menu/drinks.png'
import garlicBread from '../img/menu/garlic-bread.jpg'
import mixedSalad from '../img/menu/mixed-salad.jpg'
import chickenWings from '../img/menu/chicken-wings.jpg'
import tikaMasala from '../img/menu/tika-masala.jpg'
import meatPizza from '../img/menu/meat-pizza.jpg'
import spicyMeatballs from '../img/menu/spicy-meatballs.jpg'
import schnitzel from '../img/menu/schnitzel.jpg'
import cheeseburger from '../img/menu/cheeseburger.jpg'
import fudgecake from '../img/menu/fudgecake.jpg'
import caramel from '../img/menu/caramel.jpg'
import cremeBrulle from '../img/menu/creme-brulle.jpg'
import chocolateSouffle from '../img/menu/chocolate-souffle.jpg'
import wine from '../img/menu/wine.jpg'
import beer from '../img/menu/beer.jpg'
import coffee from '../img/menu/coffee.jpg'
import cocaCola from '../img/menu/coca-cola.jpg'

const Menu = () => {

    const starterButton = (e) => {
        e.preventDefault();
        document.querySelector('.slider-starters').style.display = "flex";
        document.querySelector('.slider-main').style.display = "none";
        document.querySelector('.slider-drinks').style.display = "none";
        document.querySelector('.slider-deserts').style.display = "none";
    }

    const mainButton = (e) => {
        e.preventDefault();
        document.querySelector('.slider-starters').style.display = "none";
        document.querySelector('.slider-drinks').style.display = "none";
        document.querySelector('.slider-deserts').style.display = "none";
        document.querySelector('.slider-main').style.display = "flex";
    }

    const desertButton = (e) => {
        e.preventDefault();
        document.querySelector('.slider-starters').style.display = "none";
        document.querySelector('.slider-main').style.display = "none";
        document.querySelector('.slider-drinks').style.display = "none";
        document.querySelector('.slider-deserts').style.display = "flex";
    }

    const drinksButton = (e) => {
        e.preventDefault();
        document.querySelector('.slider-starters').style.display = "none";
        document.querySelector('.slider-main').style.display = "none";
        document.querySelector('.slider-deserts').style.display = "none";
        document.querySelector('.slider-drinks').style.display = "flex";
    }

    return (
        <div className="menu">
            <h2>Our Menu</h2>
            <p className="main-paragraph">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                some form, by injected humour, or randomised words which don't look even slightly believable.</p>

            <div className="tab-menu">
                <div className="slider-nav">
                    <ul>
                        <li onClick={starterButton} className="starters">
                            <a href="true" id="starters">Starters</a>
                            <img src={starters} alt="starters" />
                        </li>
                        <li onClick={mainButton} className="main-dishes">
                            <a href="true" id="main-dishes">Main Dishes</a>
                            <img src={mainDishes} alt="main-dishes" />
                        </li>
                        <li onClick={desertButton} className="deserts">
                            <a href="true" id="deserts">Deserts</a>
                            <img src={deserts} alt="deserts" />
                        </li>
                        <li onClick={drinksButton} className="drinks">
                            <a href="true" id="drinks">Drinks</a>
                            <img src={drinks} alt="drinks" />
                        </li>
                    </ul>
                </div>

                <div className="slider-starters">
                    <div className="first-row">
                        <div className="first-dish">
                            <img src={garlicBread} alt="garlic-bread" />
                            <div>
                                <h3>Garlic Bread</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis eleifend dapibus.
                            </p>
                            </div>
                            <span>$8.5</span>
                        </div>
                        <div className="second-dish">
                            <img src={mixedSalad} alt="mixed-salad" />
                            <div>
                                <h3>Mixed Salad</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis eleifend dapibus.
                            </p>
                            </div>
                            <span>$25</span>
                        </div>
                    </div>

                    <div className="second-row">
                        <div className="third-dish">
                            <img src={chickenWings} alt="chicken-wings" />
                            <div>
                                <h3>BBQ Chicken Wings</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis eleifend dapibus.
                            </p>
                            </div>
                            <span>$10</span>
                        </div>
                        <div className="fourth-dish">
                            <img src={tikaMasala} alt="tika-masala" />
                            <div>
                                <h3>Tikka Masala</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis eleifend dapibus.
                            </p>
                            </div>
                            <span>$15</span>
                        </div>
                    </div>
                </div>

                <div className="slider-main">
                    <div className="first-row">
                        <div className="first-dish">
                            <img src={meatPizza} alt="meat-pizza" />
                            <div>
                                <h3>Meat Fest Pizza</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis eleifend dapibus.
                            </p>
                            </div>
                            <span>$5</span>
                        </div>
                        <div className="second-dish">
                            <img src={spicyMeatballs} alt="spicy-meatballs" />
                            <div>
                                <h3>Spicy Meatballs</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis eleifend dapibus.
                            </p>
                            </div>
                            <span>$6.5</span>
                        </div>
                    </div>

                    <div className="second-row">
                        <div className="third-dish">
                            <img src={schnitzel} alt="schnitzel" />
                            <div>
                                <h3>German Schnitzel</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis eleifend dapibus.
                            </p>
                            </div>
                            <span>$14</span>
                        </div>
                        <div className="fourth-dish">
                            <img src={cheeseburger} alt="cheeseburger" />
                            <div>
                                <h3>Cheeseburger</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis eleifend dapibus.
                            </p>
                            </div>
                            <span>$12</span>
                        </div>
                    </div>
                </div>

                <div className="slider-deserts">
                    <div className="first-row">
                        <div className="first-dish">
                            <img src={fudgecake} alt="fudgecake" />
                            <div>
                                <h3>Fudgecake</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis eleifend dapibus.
                            </p>
                            </div>
                            <span>$4.5</span>
                        </div>
                        <div className="second-dish">
                            <img src={caramel} alt="caramel" />
                            <div>
                                <h3>Creme Caramel</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis eleifend dapibus.
                            </p>
                            </div>
                            <span>$6</span>
                        </div>
                    </div>

                    <div className="second-row">
                        <div className="third-dish">
                            <img src={cremeBrulle} alt="creme-brulle" />
                            <div>
                                <h3>Creme Brulle</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis eleifend dapibus.
                            </p>
                            </div>
                            <span>$5</span>
                        </div>
                        <div className="fourth-dish">
                            <img src={chocolateSouffle} alt="chocolate-souffle" />
                            <div>
                                <h3>Chocolate Souffle</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis eleifend dapibus.
                            </p>
                            </div>
                            <span>$7</span>
                        </div>
                    </div>
                </div>

                <div className="slider-drinks">
                    <div className="first-row">
                        <div className="first-dish">
                            <img src={wine} alt="wine" />
                            <div>
                                <h3>White Wine</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis eleifend dapibus.
                            </p>
                            </div>
                            <span>$12</span>
                        </div>
                        <div className="second-dish">
                            <img src={beer} alt="beer" />
                            <div>
                                <h3>Beer</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis eleifend dapibus.
                            </p>
                            </div>
                            <span>$5</span>
                        </div>
                    </div>

                    <div className="second-row">
                        <div className="third-dish">
                            <img src={coffee} alt="coffee" />
                            <div>
                                <h3>Coffee</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis eleifend dapibus.
                            </p>
                            </div>
                            <span>$3</span>
                        </div>
                        <div className="fourth-dish">
                            <img src={cocaCola} alt="coca-cola" />
                            <div>
                                <h3>Coca Cola</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis eleifend dapibus.
                            </p>
                            </div>
                            <span>$4</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;