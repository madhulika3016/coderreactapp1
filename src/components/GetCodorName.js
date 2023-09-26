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
                <p>{coder.cid}<br />
                {coder.cname}<br></br>
                {coder.tech}<br></br>
                {coder.laptop.lname}<br></br>
                {coder.laptop.company}</p>      
            </>

      );  }
   

   export default GetcoderByName1;