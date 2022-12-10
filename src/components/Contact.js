import './Contact.css';

const userName = "Roberto Garcia";
const isConnected = true;

function Contact() {
    return (
        <div className='Contact'>
            <img className='avatar' src='https://randomuser.me/api/portraits/men/55.jpg' alt='User profile'/>
            <div>
                <span className='name'>{ userName }</span>
                <div className='status'>
                    <span className={ isConnected ? 'status-online' : 'status-offline' }></span>
                    <span className='status-text'>{ isConnected ? 'online' : 'offline' }</span>
                </div>
            </div>
        </div>
    );
}

export default Contact;