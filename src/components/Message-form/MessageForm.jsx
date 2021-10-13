import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sendMessage } from '../../actions/index';
import { Link } from 'react-router-dom';
import './messages-form.css'

export default function MessageForm() {
    const dispatch = useDispatch();
    const [message, setMessage] = useState({
        email: "",
        text: ""
    })
    function onInputChange(e) {
        setMessage({
            ...message,
            [e.target.name]: e.target.value
        })
    }
    function handleSubmit(e) {
        e.preventDefault()
        dispatch(sendMessage(message))
        alert('Sent Message')
        setMessage({
            email: "",
            text: "",
        })
    }

    return (
        <div className='m-3 '>
            <div className='mt-3 m-1'>
                <Link to='/'>
                    <Button className='button'size="sm">Back</Button>
                </Link>
                <Link to='/sent-messages'>
                    <Button className='m-2 button' size="sm">Box Messages</Button>
                </Link>
            </div>
            <div >
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control value={message.email} name="email" type="email" onChange={(e) => onInputChange(e)} placeholder="name@example.com" required={true} />
                    </Form.Group>
                    <Form.Group className="mb-3" required="true" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Textarea</Form.Label>
                        <Form.Control  value={message.text} name="text" onChange={(e) => onInputChange(e)} as="textarea" rows={3} required={true} />
                    
                    </Form.Group>
 
                    </Form>
 
                    <Button className='button'onClick={(e) => handleSubmit(e)}>Send</Button>{' '}
                


            </div>
        </div>
    )
}