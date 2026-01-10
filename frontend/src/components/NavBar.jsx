import React from 'react'
import { useAuthStore } from '../store/useAuthStore'

const NavBar = () => {
    const { authenticated } = useAuthStore();
    return (
        <div
            className='bg-white navbar'
        >
            {/* Title - Light/Dark mode switch - Post (only visible if logged in) - Login */}
            <div className='flex-1 navbar-start'>
                <a>Nblog</a>
            </div>
            <div className='navbar-end'>
                {/* Light / Dark mode switch */}
                <button>
                    
                </button>

                {/* Post button (only see if authenticated = true) */}
                {
                    authenticated ? <button>
                        Post
                    </button> : <p>Log in to post</p>
                }
                {/* Login button */}
                <button>
                    login
                </button>
            </div>
        </div>
    )
}

export default NavBar
