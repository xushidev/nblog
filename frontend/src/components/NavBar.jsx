import React from 'react'
import { useAuthStore } from '../store/useAuthStore'

const NavBar = () => {
    const { authenticated } = useAuthStore();
    return (
        <div
            className='bg-white'
        >
            {/* Title - Light/Dark mode switch - Post (only visible if logged in) - Login */}
            <div>
                <p>Nblog</p>
            </div>
            <div>
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

                </button>
            </div>
        </div>
    )
}

export default NavBar
