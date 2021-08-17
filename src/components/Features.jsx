import FeatureBox from './FeatureBox'
import image1 from '../images/1.svg'
import image2 from '../images/2.svg'
import image3 from '../images/3.svg'
import image4 from '../images/4.svg'
const Features = () => {
    return ( 
        <div id='features'>
            <h1>FEATURES</h1>
            <div className="a-container">
                <FeatureBox image={image1} title='a'/>
                <FeatureBox image={image2} title='a'/>
                <FeatureBox image={image3} title='a'/>
                <FeatureBox image={image4} title='a'/>
            </div>
        </div>
     );
}
 
export default Features;