import tom from '../img/team/tom.jpg';
import ursula from '../img/team/ursula.jpg';
import secondTom from '../img/team/second-tom.jpg';
import jack from '../img/team/jack.jpg';
import jonathan from '../img/team/jonathan.jpg';
import jenny from '../img/team/jenny.jpg';
import gary from '../img/team/Gary.jpg';
import danny from '../img/team/danny.jpg';
import kitchenTeam from '../img/team/kitchen team.jpeg';
import { Link } from 'react-router-dom';

const Team = () => {
    return (
        <div className="team">
            <div className="team-div">
                <h2 className="our-team">Our Team</h2>

                <div className="tom-div">
                    <div className="tom-sec-div">
                        <h2>Tom</h2>
                        <h4>Chef Patron</h4>
                        <p>
                            Tom Sellers is the Chef Patron of Restaurant Lorem. He dreamed of opening Restaurant Lorem at
                            the age of 19, and in April 2013, aged 26, was able to realise his dream. Tom trained at some of
                            the world’s best restaurants including Restaurant Tom Aikens, Noma and Per Se. His food is
                            predominantly British, using seasonality to lead a menu that invokes memory and brings a
                            narrative to each plate.
                    </p>
                    </div>
                    <img src={tom} alt="tom" />
                </div>

                <div className="ursula-div">
                    <img src={ursula} alt="ursula" />

                    <div className="ursula-sec-div">
                        <h2>Ursula</h2>
                        <h4>General Manager</h4>
                        <p>
                            Ursula oversees the running of Restaurant Lorem from everything from the finances to the floor.
                            If there is a table available, she will find it for you. Unsurpassable organisation skills and
                            the patience of a saint.
                    </p>
                    </div>
                </div>

                <div className="second-tom-div">
                    <div className="second-tom-sec-div">
                        <h2>Tom</h2>
                        <h4>Head Chef</h4>
                        <p>
                            Tom joined Restaurant Lorem in late 2017 his career has taken him through the kitchens of The
                            Ritz in London, Per Se in New York and L’enclume in the Lake District. In 2019 Tom competed in
                            The World Finals of the Bocuse D’or, finishing 10th in the world. With a deep passion for
                            British products and a keen eye for detail Tom is now Head Chef at Restaurant Lorem.
                    </p>
                    </div>
                    <img src={secondTom} alt="second-tom" />
                </div>

                <div className="jack-div">
                    <img src={jack} alt="jack" />

                    <div className="jack-sec-div">
                        <h2>Jack</h2>
                        <h4>Restaurant Manager</h4>
                        <p>
                            Jack joined Restaurant Lorem in 2020. Originally from Bolton, Jack started his career in his
                            native North West at the Punch Bowl in Cumbria. Next he headed to London, spending time at
                            Roganic and the Kitchen Table, Bubbledogs. His last stop was at The Ledbury, where he arrived as
                            a head waiter and left as Restaurant Manager. Jack’s passion is providing an outstanding dining
                            experience for all our guests.
                    </p>
                    </div>
                </div>

                <div className="jonathan-div">
                    <div className="jonathan-sec-div">
                        <h2>Jonathan</h2>
                        <h4>Head Sommelier</h4>
                        <p>
                            Jonathan is an award winning Sommelier with extensive experience. He has been part of the
                            Restaurant Lorem team since early 2020. Jonathan has also worked at The Ritz, Social Eating
                            House and Orwells, whilst also being a judge for the Imbibe Sommelier Wine Awards. Jonathan
                            carefully selects wines that are intriguing and champions the people and provenance behind each
                            drink on our list.
                    </p>
                    </div>
                    <img src={jonathan} alt="jonathan" />
                </div>

                <div className="jenny-div">
                    <img src={jenny} alt="jenny" />
                    <div className="jenny-sec-div">
                        <h2>Jenny</h2>
                        <h4>Guest Relations Manager</h4>
                        <p>
                            Jenny has been part of Restaurant Lorem’s team since 2018. Jenny oversees reservations, guest
                            relations, book outs, large parties and assists on external events.
                    </p>
                    </div>
                </div>

                <div className="gary-div">
                    <div className="gary-sec-div">
                        <h2>Gary</h2>
                        <h4>Group Head Chef</h4>
                        <p>
                            Gary joined Restaurant Lorem in August 2017. He has over three years experience with working for
                            the Fat Duck Group. His time there nurtured his cooking skills and experience with managing a
                            kitchen of this level.
                            Hailing from the West Country, Gary brings his love of good produce and a lot of energy to the
                            team. His role has now developed to be in charge of all external events and projects for the
                            group.
                    </p>
                    </div>
                    <img src={gary} alt="gary" />
                </div>

                <div className="danny-div">
                    <img src={danny} alt="danny" />
                    <div className="danny-sec-div">
                        <h2>Danny</h2>
                        <h4>Sous Chef</h4>
                        <p>
                            Danny is originally from Peru and started working at Lorem 3 years ago. Within those years he
                            has massively progressed from Demi Chef to Sous Chef. He is a true asset to the kitchen and
                            proof that hard work really pays off.
                    </p>
                    </div>
                </div>

                <div className="kitchen-team-div">
                    <div className="kitchen-sec-div">
                        <h2>Kitchen Team</h2>
                        <p>
                        </p>
                    </div>
                    <img src={kitchenTeam} alt="kitchenTeam" />
                </div>
            </div>

            <div className="join-team">
                <h3>
                    Would you like to join the team?
                </h3>
                <Link to="/contact" className="careers-btn">Contact Us</Link>
            </div>
        </div>
    );
}

export default Team;