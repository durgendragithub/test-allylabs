import React from 'react';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';


const rct = {
    color:'blue',
    background:'#fff',
    position:'fixed',
    top:'50%',
    left:'50%',
    transform:'translate(-50%,-50%)',
    padding:'12px',
    zIndex:200,
    boxShadow:'0 0 3px 5px #050011'

}
const overlay = {
    position:'fixed',
    top: 0,
    left:0,
    right:0,
    bottom:0,
    background:'rgba(1,6,3,0.8)',
    zIndex:200

}



export default function Modelbox({open,children,onClose}){
    if(!open) return null  
    return(
        <div class="over" style={overlay}>
           <div style={rct}>
              <CancelPresentationIcon  onClick ={onClose} sx={{float:'right'}}/>
             {children }
             </div>
        </div>
    )
}