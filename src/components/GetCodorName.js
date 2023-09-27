import { getcoderByName } from "../services/CoderService";
import { useState ,useEffect } from "react";
const GetcoderByName1 = () => {
      const[coder1,setCoder1]=useState({});
    const[cname,setCname]=useState('');
   
     useEffect(() => {
      getcodername(cname);
  },[cname]) 
 
    const getcodername=(cname)=>{
      getcoderByName(cname).then((response) =>{
          setCoder1(response.data);
          console.log(response.data);    
      }).catch(error =>{
          console.log(error);
      })} 
      return(
            <>
            <label>CoderName</label>
<input type = "text" name = "cname" className = "form-control" value ={cname}
                  onChange = {(e) => setCname(e.target.value)}></input>
                <p>{coder1.cid}<br />
                {coder1.cname}<br></br>
                {coder1.tech}<br></br></p>
            </>

      );  }
   

   export default GetcoderByName1;