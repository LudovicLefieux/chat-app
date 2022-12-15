import PropTypes from 'prop-types';
import './Contact.css';

function Contact(props) {
    return (
        <div className='Contact'>
            <img className='avatar' src={ props.avatar } alt='User profile'/>
            <div>
                <span className='name'>{ props.name }</span>
                <div className='status'>
                    <span className={ props.online ? 'status-online' : 'status-offline' }></span>
                    <span className='status-text'>{ props.online ? 'online' : 'offline' }</span>
                </div>
            </div>
        </div>
    );
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
};

export default Contact;