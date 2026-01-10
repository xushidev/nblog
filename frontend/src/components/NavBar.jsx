import React from 'react'
import { useAuthStore } from '../store/useAuthStore'
import { NavLink } from 'react-router';

const NavBar = () => {
    const { authenticated } = useAuthStore();
    return (
        <div
            className='bg-white navbar'
        >
            {/* Title - Light/Dark mode switch - Post (only visible if logged in) - Login */}
            <div className='flex-1 navbar-start'>
                <NavLink to={"/"}>Nblog</NavLink>
            </div>
            <div className='navbar-end flex justify-evenly'>
                {/* Light / Dark mode switch */}
                <button>
                    
                </button>

                {/* Post button (only see if authenticated = true) */}
                {
                    authenticated ? 
                    <button>Post</button> : 
                    <button>Log in to post</button>
                }
                {/* Login button */}
                <button>
                    <NavLink to={"/login"}>login</NavLink>
                </button>
            </div>
        </div>
    )
}

export default NavBar
