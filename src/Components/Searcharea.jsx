import React,{useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
function Searcharea(props){
    const [input,setinput]=useState('');
    function handlechange(event){
        setinput(event.target.value);
    }
    function handleclick(event){
        props.onsubmit(input);
        setinput("");
        event.preventDefault();
      
    }
    return(
        <div className='searcharea'>
            <input placeholder='Enter The Location' type='text' className='input' onChange={handlechange} value={input}></input>
            <button className='button' onClick={handleclick} >
            <SearchIcon/>
            </button>
            
        </div>
    )
}
export default Searcharea;