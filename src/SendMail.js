import React from 'react'
import "./SendMail.css"
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useForm } from "react-hook-form";
import { closedSendMessage } from './features/mailSlice';
import { useDispatch } from 'react-redux';
import { db } from "./firebase";
import firebase from "firebase";

function SendMail() {
    const { register, handleSubmit, watch, errors} = useForm();
    const dispatch = useDispatch();

    const onSubmit = (formdata) => {
        console.log(formdata);
        db.collection('emails').add(
            {
            to:formdata.to,
            subject:formdata.subject,
            message:formdata.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }
        );
        dispatch(closedSendMessage());
    }

    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon onClick={() => dispatch(closedSendMessage())} 
                className="sendMail__close"/>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name='to' placeholder="To" type="email" ref={register({required: true})}/>

                {errors.to && <p className="sendMail__error">To is Required</p>}
                <input name='subject' placeholder="Subject" type="text" ref={register({required: true})}/>

                {errors.subject && <p className="sendMail__error">Subject is Required</p>}
                
                <input 
                name='message' 
                placeholder="Message..." 
                type="text" 
                className = "sendMail__message" 
                ref={register({required: true})}/>

                {errors.message && <p className="sendMail__error">Message is Required</p>}
                <div className="sendMail__options">
                    <Button className="sendMail__send" variant="contained" color="primary" type="submit">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
