import React, { useEffect, useState } from 'react'
import "./navbar.scss"
import { Link, useLocation } from 'react-router-dom';
const Navbar = () => {
   const [active,setActive] = useState(false);
   const [open,setOpen] = useState(false);

   const {pathname} = useLocation()

   const isActive = () =>{
    window.scrollY > 0 ? setActive(true) : setActive(false)
   }
  
     useEffect(()=>{
        window.addEventListener("scroll", isActive);

        return () =>{
            window.removeEventListener("scroll",isActive)
        }
     },[]);

    const currentUser = {
          id:1,
          username:"john doe",
          isSeller: true,
     }

  return (
    <div className={active || pathname !=="/" ? "navbar active" : "navbar"}>
        <div className="container">
            <div className="logo">
             <Link to= "/" className='link'>
                <span className='text'>fiverr</span>
               </Link>
               <span className='dot'>.</span>
            </div>
            <div className="links">
                <span>Fiverr Business</span>
                <span>Explore</span>
                <span>English</span>
                <span>Sign in</span>
          { !currentUser?.isSeller  && <span>Become a Seller</span>}
              { !currentUser &&  <button>Join</button>}
              {currentUser && (
                <div className="user" onClick={()=>setOpen(!open)}>
                    <span>{currentUser.username}</span>
                   { open && ( <div className="options">
                        {currentUser?.isSeller && (
                            <>
                            <Link to="/mygigs" className='link'>Gigs</Link>
                            <Link to="/add" className='link'>Add new Gig</Link>
                            </>
                        )}
                        <Link to="/orders" className='link'>orders</Link>
                        <Link to ="/messages" className='link'>Messages</Link>
                        <Link to="/" className='link'>logout</Link>
                    </div>)}
                </div>
              )}
            </div>
           
        </div> 
        {(active || pathname !=="/" )&& (
            <><hr />
        <div className="menu">
            <Link to="/" className='link'>Audio & Services</Link>
            <Link to="/" className='link'>Affiliate Marketing</Link>
            <Link to="/" className='link'>Writing & Translation</Link>
            <Link to="/" className='link'>Video & Animation</Link>
            <Link to="/" className='link'>Web Programming & DEbugging</Link>
        </div>
        <hr/>
        </>)}
    </div>
  )
}

export default Navbar