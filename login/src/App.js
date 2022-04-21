
import './App.css';
import {useState} from 'react'
import LoginForm from './component/LoginForm'

function App() {
const adminUser=[
  {
    email: 'admin@example',
    password: 'admin123',
  },
  {
    email: 'fake@example',
    password: 'fake123',
  }
]



const[user,setUser]=useState({name:"",email:"",})
const[error,setError]=useState("");

const Login = details=>{
  console.log(details);
  adminUser.map((loginUser)=>
  {
    

    if(loginUser.email===details.email && loginUser.password===details.password){
      console.log("Log-In");
  setUser({
    name: "Admin",
    email:details.email,
  })
    }
    else{
      console.log("Please Enter Valid Credentials");
      setError("Please Enter Valid Credentials")
    }
  })
//   if(adminUser.email===details.email && adminUser.password===details.password){
//     console.log("Log-In");
// setUser({
//   name: "Admin",
//   email:details.email,
// })
//   }
}

const LogOut = ()=>{
  console.log("Log-Out");
  setUser({name:"",email:"",})
}


  return (
<div className="App">
{(user.email!=="")?
(
<div className="Welcome">
<h2>Welcome, <span>{user.name}</span></h2>
<button onClick={LogOut}>Log Out</button>
</div>)
:<LoginForm Login={Login} error={error}/>}
</div>
  );
}

export default App;
