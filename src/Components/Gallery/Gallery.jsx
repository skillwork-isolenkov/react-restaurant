import logo from '../img/gallery/1.jpg';
import logo1 from '../img/gallery/2.jpg';
import logo2 from '../img/gallery/3.jpg';
import logo3 from '../img/gallery/4.jpg';
import logo4 from '../img/gallery/5.jpg';
import logo5 from '../img/gallery/6.jpg';
import logo6 from '../img/gallery/7.jpg';
import logo7 from '../img/gallery/8.jpg';
import logo8 from '../img/gallery/9.jpg';
import logo9 from '../img/gallery/10.jpg';

const Gallery = () => {
    return (
        <div className="gallery">
            <div className="head-elements">
                <h2>Our Gallery</h2>
                <p>There are many variations of passages of Lorem Ipsum available</p>
            </div>

            <div className="food-images">
                <div className="first-part-img">
                    <img className="photo-1" src={logo} alt="logo" />
                    <img className="photo-2" src={logo1} alt="logo1" />
                </div>
                <div className="second-part-img">
                    <img className="photo-3" src={logo2} alt="logo2" />
                    <img className="photo-4" src={logo3} alt="logo3" />
                    <img className="photo-5" src={logo4} alt="logo4" />
                </div>
                <div className="third-part-img">
                    <img className="photo-6" src={logo5} alt="logo5" />
                    <img className="photo-7" src={logo6} alt="logo6" />
                </div>
                <div className="fourth-part-img">
                    <img className="photo-8" src={logo7} alt="logo7" />
                    <img className="photo-9" src={logo8} alt="logo8" />
                    <img className="photo-10" src={logo9} alt="logo9" />
                </div>
            </div>
        </div>
    );
}

export default Gallery;