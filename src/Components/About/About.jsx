import aboutMain from '../img/about/about-main.jpg';
import aboutInset from '../img/about/about-inset.jpg';
import spaghetti from '../img/about/spaghetti.jpg';
import burger from '../img/about/burger.jpg';
import pizza from '../img/about/pizza.jpg';

const About = () => {
    return (
        <div className="about-us">
            <div className="about-elements">
                <div className="about-history">
                    <h2>About Us</h2>
                    <p>Tom Sellers tells his story and the story of British food through an ever-evolving tasting menu
                    of
                    seasonal
                    dishes. The restaurant gained its Michelin star after five months of opening in 2013 and has
                    retained it
                        ever since.</p>
                </div>

                <div className="paragraphs">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm incididunt ut labore et
                        dolore
                        magna aliqua. Ut enim ad minim venia, nostrud exercitation ullamco.
                    </p>
                    <p>
                        Aenean commodo ligula eget dolor aenean massa. Cum sociis nat penatibu set magnis dis parturient
                        montes,
                        nascetur ridiculus mus. quam felisorat, ultricies nec, Aenean commodo ligula eget dolor penatibu
                        set
                        magnis is parturient montes, nascetur ridiculus mus. quam felisorat, ultricies nec, pellentesque
                        eu,
                        pretium quis, sem. quat massa quis enim. Donec vitae sapien ut libero venenatis fauci Nullam
                        quis
                        ante.
                        Etiam sit amet rci eget eros.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm incididunt ut labore et
                        dolore
                        magna aliqua. Ut enim ad minim venia, nostrud exercitation ullamco.
                    </p>
                </div>
            </div>

            <div className="images">
                <img className="about-main" src={aboutMain} alt="aboutMain" />
                <img className="about-inset" src={aboutInset} alt="aboutInset" />
            </div>

            <div className="todays-special">
                <h2>Today's Special</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim venia,nostrud exercitation ullamco.
                </p>

                <div className="special-images">
                    <img src={spaghetti} alt="spaghetti" />
                    <img src={burger} alt="burger" />
                    <img src={pizza} alt="pizza" />
                </div>
            </div>
        </div>
    );
}

export default About;