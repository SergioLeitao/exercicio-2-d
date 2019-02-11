import React, {Component} from 'react';
import PropTypes from 'prop-types';
import serializeForm from 'form-serialize';


class MessageDialog extends Component{

    handleSubmit = (e) => {
        e.preventDefault();
        const values = serializeForm(e.target, { hash: true });
        console.log(values);
        if (this.props.onSenderMessage) {
            this.props.onSenderMessage(values.message)
        }
    }

    isDisabled = () => {
        return false;
      };


    render(){
        return(
            <div>
            <form className="input-group" onSubmit={this.handleSubmit}>
                <input type="text" name="message" className="form-control" placeholder="Enter your message..." />
                <div className="input-group-append">
                <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                </button>
                </div>
            </form>
            </div>
        )
    }
}


MessageDialog.propTypes = {
    onSenderMessage: PropTypes.func.isRequired,
}

export default MessageDialog;

