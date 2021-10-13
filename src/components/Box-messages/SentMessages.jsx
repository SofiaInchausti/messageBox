import { getMessages, deleteMessages } from '../../actions/index'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


export default function SentMessages() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMessages())
    }, [dispatch])

    const allMessages = useSelector(state => state.messages)

    const deleteMsj = (e) => {
        e.preventDefault()
        dispatch(deleteMessages())
    }

    return (
    <div>
        <Link to='/'>
            <Button className='mt-3 m-3 button'>Back</Button>
        </Link>
        <div className='mt-3 m-3' >
            <Table
                responsive="sm" striped bordered hover
            >
                <thead>
                    <tr>
                        <th>#</th>
                        <th className='w-25'>To</th>
                        <th>Text</th>
                    </tr>
                </thead>
                <>
               {allMessages && allMessages.length >=0 ? allMessages.map((e, index) => {
                    return <tbody key={index+1}>
                        <tr>
                            <td>{index+1}</td>
                            <td>{e.email}</td>
                            <td>{e.text}</td>
                        </tr>
                    </tbody> 
                }
                ) : ''}
                </>
         </Table>
        </div>
        {/* <div className="d-flex justify-content-end"></div>
        {allMessages && allMessages.length >= 0 ?
            <Button onClick={(e) => { deleteMsj(e) }} className='mt-3 m-3 shadow mb-5 bg-red rounded' variant="danger">Delete messages</Button> :
            <Button className='mt-3 m-3 shadow mb-5 bg-red rounded' variant="danger">Delete messages</Button>}  */}
    </div>
    
    )
}