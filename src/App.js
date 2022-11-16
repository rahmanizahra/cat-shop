import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Card from './Card';
import SignUp from './SignUp';
import { Link, Route, Routes,NavLink, useLocation } from 'react-router-dom';
function App() {
  const [catData,setCatData] = React.useState([])
  const [signUpIsClicked,setSignUpIsClicked] = React.useState(false)
  const [loginIsClicked,setLoginIsClicked] = React.useState(false)
  const [isSearched ,setIsSearched]= React.useState(false)
  const [search,setSearch] = React.useState("")
  React.useEffect(() => {
    fetch("https://api.thecatapi.com/v1/breeds")
    .then(res => res.json())
    .then(data => setCatData(data.map(item=>{
      return{
        ...item,isHeld:false,addToCard:false,price:50
      }
    })))
  },[])
console.log(catData)
const serachResault = catData.filter(country => country.name.toUpperCase().includes(search.toUpperCase()))
  function showSignUp(){
    setSignUpIsClicked(true)
    
  }

  function showLogin(){
    setLoginIsClicked(true)
  }
 function closeSignUp(){
   setSignUpIsClicked(false)
 }
 function closeLogin(){
   setLoginIsClicked(false)
 }
 function openSignup(){
   setLoginIsClicked(false)
   setSignUpIsClicked(true)
 }
 function showSearchBox(){
   document.getElementById("search-box").style.display="block"
 }
 function handleChange(e){
    setSearch(e.target.value);
    setIsSearched(true);
     
  }
function holdCat(id){
     setCatData(catData.map(cat => {
      return cat.id === id ?
      {...cat,isHeld: !cat.isHeld}:
      cat
    })) 
 }

 function addToCard(id){
   setCatData(catData.map(cat => {
     return cat.id === id ?
     {...cat,addToCard:!cat.addToCard}:
    cat
   }))
 }
  return (
<div className="App">
     <nav>
       <div className='links'>
       <li><Link to="/">Home</Link></li>
       <li><Link to="/about">About</Link></li>
       <li><Link to="/card">Card</Link></li>
        </div>
        
        <input id="search-box" className='search-box'  onChange={handleChange}
          value={search} placeholder='Search base on the name of cat'></input>
        <img  onClick={()=>showSearchBox()}style={{width:"20px",height:'20px',marginTop:"10px",marginRight:"10px"}} src='./search5.png' alt=''/>
       <li onClick={()=>showSignUp()}>Sign up</li>
       <li onClick={()=>showLogin()}>log in</li>
     </nav>
     
    
    
  <Routes>
    <Route path='/' element={<Home
    catData={catData}
    holdCat={holdCat}
    addToCard={addToCard}
    isSearched={isSearched}
    search={search}
    serachResault={serachResault}
    
    />}/>
    <Route path='/about' element={<About
    catData={catData}
    holdCat={holdCat}
    addToCard={addToCard}
    />}/>
    <Route path='/card' element={<Card
    catData={catData}
    holdCat={holdCat}
    addToCard={addToCard}
    />}/>
  </Routes>


  { signUpIsClicked &&
    <div className='overlay'>
     <div className='signup-container'>
      <div className='close-signup'>
        <h1 className='sign-up'>Sign Up</h1>
        <h3 className='close' onClick={()=>closeSignUp()}>X</h3>
      </div>
     
     <p>It is quick and easy</p>
     <hr/>
     <form>
      <input className="input" type="text" placeholder='First name'></input>
      <input className="input" type="text" placeholder='Last name'></input>
      <input className="input" type="email"placeholder='Email'></input>
      <input className="input" type="password"placeholder='New password'></input>
      <label className="input" >Birthday :</label>
      <input className="input" type="date"></input>
      <label className='gender'>Famale</label>
      <input type="radio"></input>
      <label className='gender'>Male</label>
       <input className='gender' type="radio"></input>
       <label className='gender'>Other</label>
      <input type="radio"></input>
      <button className="btn-signup">Sign up</button>
     </form>
    </div>
    </div>
  }
  {loginIsClicked &&
   <div div className='overlay'>
    <div className='login-container'>
       <div className='close-login'>
        <h1 className='login'>Login</h1>
        <h3 className='close' onClick={()=>closeLogin()}>X</h3>
        </div>
        <form>
          <label className='username'>Username</label>
          <input className="input" type="text" placeholder=" Type your username"></input>
          <label className='password'>Password</label>
          <input className="input" type="text" placeholder=" Type your password"></input>
          <button className='btn-login'>Login</button>
          <p className='line'>Or Sign up using</p>
          <p className='line2' onClick={()=>openSignup()}>Sign Up</p>
        </form>
      </div>
       
    
     
     </div>
    }
  <footer className='footer-container'>
      <div  className='footer'>
          This website was built by <a href='https://github.com/rahmanizahra' target="_blank"> Zahra Rahmani</a>
      </div>
  </footer>
   
</div>
  );
}

export default App;
