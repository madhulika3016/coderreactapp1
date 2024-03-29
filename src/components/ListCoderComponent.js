import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {listcoders, deletecoder,getcoderByName} from '../services/CoderService'

const ListCoderComponent = () => {

    const [coders, setCoders] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        getCoders();
    }, [])

    const getCoders = () => {
        listcoders().then((response) => {
            setCoders(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const removeCoder = (cid) => {
       deletecoder(cid).then((response) =>{
        getCoders();

       }).catch(error =>{
           console.log(error);
       })
        
    }
    function getcoderByName1()
    {
        navigate('/getcoderbyname')
    }

    function addCoder() {
        navigate('/add-coder')
    }

    const updateCoder = (id) => {
        navigate(`/edit-coder/${id}`)
    }

    return (
        <div className = "container">
            <br /><br />
            <h4 className = "text-center"> List Coders </h4>
            
            <button className = "btn btn-success mb-4" onClick={addCoder}>Add Coder</button><br></br>
            
 <button className = "btn btn-success mb-4" onClick={getcoderByName1}>CoderNames</button>
            <table className="table table-bordered table-striped">
                {/* <thead className="table-dark"> */}
                <thead>   
                    <tr>
                        <th> Coder Id </th>
                        <th> Coder Name </th>
                        <th>  Technology </th>
                        <th>  LaptopName </th>
                        <th>  Company </th>
                        <th> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        coders.map(
                            coder =>
                            <tr key = {coder.cid}> 
                                <td> {coder.cid} </td>
                                <td> {coder.cname} </td>
                                <td>{coder.tech}</td>
                                <td>{coder.laptop.lname}</td>
                                <td>{coder.laptop.company}</td>
                                <td>
                                    <button className="btn btn-info" onClick={() => updateCoder(coder.cid)} >Update</button>
                                    <button className = "btn btn-danger" onClick = {() => removeCoder(coder.cid)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListCoderComponent
