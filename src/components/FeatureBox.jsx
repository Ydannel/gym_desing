const FeatureBox = (props) => {

    return ( 
        <div className='a-box'>
            <div className='a-b-img'>
                <img src={props.image}/>
            </div>
            <div className='a-b-text'>
                <h2>{props.title}</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo rem dolorum natus maxime excepturi ea placeat dolores cum ad, commodi autem incidunt harum sunt. Facilis beatae et aliquid incidunt voluptatem?
                </p>
            </div>
        </div>
     );
}
 
export default FeatureBox;