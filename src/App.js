import './App.css';
import Card from './Card.js';
import Modelbox from './Modelbox';
import  { useState } from 'react'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function App() {
  const [IsOpen,setIsOpen] = useState(false)
  return (
    <div className='cut'>
     <div className='head'>
      
      <h1>  <ShoppingCartIcon fontSize='large' color="primary" clasName= "icon" />MY CART
        <p>.com</p>
        <button className='btm' onClick={ () => setIsOpen(true) }> Create </button>
      </h1>
    </div>
    <div class="button_wrapper">
       <Modelbox class="model" open={IsOpen} onClose={() => setIsOpen(false)}>
         <h1>Create Account...</h1>
         <PersonIcon /> <input type="text" placeholder='enter your name' /><br />
         <LockOpenIcon /> <input type="password" placeholder='ente your password'/>
          <br />
         <button className='btu'>signUp</button>
         <button className='btu'>next<ExitToAppIcon sx={{color:'green',fontSize:'small'}} /></button>
       </Modelbox>
    </div>
     <div className='wrapper'>
    <Card 
     img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS7OU0HSgI6TbNBJeevmnoLHh_C4c2NqPuQRMpO_XRxnAEJH07owGaaQAkvhdp_NgHGyg&usqp=CAU'
    title=' An Image'
    description=' I am going too make  it Big'
    price='2.5'  />

<Card 
     img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS7OU0HSgI6TbNBJeevmnoLHh_C4c2NqPuQRMpO_XRxnAEJH07owGaaQAkvhdp_NgHGyg&usqp=CAU'
    title=' An Image'
    description=' I am going too make ti Big'
    price='2.5'  />
  <Card 
     img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS7OU0HSgI6TbNBJeevmnoLHh_C4c2NqPuQRMpO_XRxnAEJH07owGaaQAkvhdp_NgHGyg&usqp=CAU'
    title=' An Image'
    description=' I am going too make ti Big'
    price='2.5'  />
   <Card 
     img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS7OU0HSgI6TbNBJeevmnoLHh_C4c2NqPuQRMpO_XRxnAEJH07owGaaQAkvhdp_NgHGyg&usqp=CAU'
    title=' An Image'
    description=' I am going too make ti Big'
    price='2.5'  />

<Card 
     img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS7OU0HSgI6TbNBJeevmnoLHh_C4c2NqPuQRMpO_XRxnAEJH07owGaaQAkvhdp_NgHGyg&usqp=CAU'
    title=' An Image'
    description=' I am going too make ti Big'
    price='2.5'  />

    </div>
  </div>

  );
}

export default App;
