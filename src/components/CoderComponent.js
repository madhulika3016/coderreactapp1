import React, {useState, useEffect} from 'react'
import {useNavigate, useParams } from 'react-router-dom';
import { updatecoder, createcoder, getcoderById} from '../services/CoderService';

const CoderComponent = () => {

    const [cid, setCid] = useState('')
    const [cname, setCname] = useState('')
    const [tech, setTech] = useState('')

    const navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdateCoder = (e) => {
        e.preventDefault();

        const coder = {cid, cname, tech}

        console.log(coder);
        if(id){
            updatecoder(coder).then((response) => {
                navigate('/coders')
            }).catch(error => {
                console.log(error)
            })

        }else{
            createcoder(coder).then((response) =>{

                console.log(response.data)
    
                navigate('/coders');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        if(id){
            getcoderById(id).then((response) =>{
                setCid(response.data.cid)
                setCname(response.data.cname)
                setTech(response.data.tech)
            }).catch(error => {
                console.log(error)
            })
        }

    }, [id])

    const pageTitle = () => {

        if(id){
            return <h2 className = "text-center">Update Coder</h2>
        }else{
            return <h2 className = "text-center">Add Coder</h2>
        }
    }

    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           pageTitle()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Coder Name :</label>
<input type = "text" name = "cname" className = "form-control" value = {cname}
                                        onChange = {(e) => setCname(e.target.value)}>
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Technology :</label>
                                    <input type = "text" name = "tech"
                                        className = "form-control"
                                        value = {tech}
                                        onChange = {(e) => setTech(e.target.value)}>
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateCoder(e)} >Submit </button>
                                {/* <Link to="/Coders" className="btn btn-danger"> Cancel </Link> */}
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default CoderComponent