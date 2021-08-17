import AboutImage from '../images/about.png'
const About = () => {
    return ( 
        <div id='about'>
            <div className='about-image'>
                <img src={AboutImage} alt="about" />
            </div>
            <div className='about-text'>
                <h1>LEARN MORE</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab possimus eaque quam cum alias quibusdam beatae provident laboriosam odit, rerum nesciunt. Voluptatum quia labore quam mollitia illo unde minima sunt.
                </p>
                <button>READ MORE</button>
            </div>
        </div>
     );
}
 
export default About;