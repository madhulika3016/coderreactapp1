import { getcoderByName } from "../services/CoderService";
import { useState ,useEffect } from "react";
const GetcoderByName1 = () => {
      const[coder,setCoder]=useState({});
    const[cname,setCname]=useState('');
     useEffect(() => {
      getcodername(cname);
  },[cname]) 
 
    const getcodername=(cname)=>{
      getcoderByName(cname).then((response) =>{
          setCoder(response.data);
          console.log(response.data);    
      }).catch(error =>{
          console.log(error);
      })} 
      return(
            <>
            <label>CoderName</label>
<input type = "text" name = "cname" className = "form-control" value ={cname}
                  onChange = {(e) => setCname(e.target.value)}></input>
                <p>{coder.cid}</p><br></br> 
                <p>{coder.cname}</p><br></br>
                <p>{coder.tech}</p><br></br>      
            </>

      );      }
   

   export default GetcoderByName1;