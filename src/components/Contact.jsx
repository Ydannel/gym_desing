
const Contact = () => {
    return ( 
        <div id='contact'>
            <h1>CONTACT US</h1>
            <form >
                <input type="text" placeholder='Full Name' required/>
                <input type="email" placeholder='Your Email' required/>
                <textarea cols="30" rows="10" placeholder='Write here......'></textarea>
                <input type="submit" value="Send Message" />
            </form>
        </div>
     );
}
 
export default Contact;
