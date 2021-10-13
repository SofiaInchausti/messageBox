import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './home.css'

export default function Home () {
    return (
        <div className='background'>
        <h1 className='title'> Welcome to </h1>
        <img src='https://porth.app/logo_white.svg' alt='logo'/>
        <div className='button-container'>
        <Link to='/sent-messages'>
        <Button className='m-3 button' size='lg' variant="primary">Message Box</Button>{' '}
        </Link>
        <Link to='/message-form'>
        <Button className='m-3 button' size='lg'variant="primary">Send a Message</Button>{' '}
        </Link>
        </div>
        </div>
    )
}