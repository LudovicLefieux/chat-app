import PropTypes from "prop-types";
import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: props.online,
    };
  }

  render() {
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.avatar} alt="User profile" />
        <div>
          <span className="name">{this.props.name}</span>
          <div
            className="status"
            onClick={(event) => {
              const isOnline = !this.state.online;
              this.setState({ online: isOnline });
            }}
          >
            <span
              className={this.state.online ? "status-online" : "status-offline"}
            ></span>
            <span className="status-text">
              {this.state.online ? "online" : "offline"}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Contact;
