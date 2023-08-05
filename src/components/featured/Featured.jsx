import React from 'react'
import "./Featured.scss"

const Featured = () => {
  return (
    <div className='featured'>
        <div className="container">
            <div className="left">
                <h1>Find the perfect freelance services for your business</h1>
                 <div className="search">
                    <div className="searchInput">
                        <img src="./img/search.png" alt="#" className='image'/>
                        <input type="text" placeholder='try something new..!' />
                    </div>
                    <button>search</button>
                 </div>
                 <div className="popular">
                    <span>Popular:</span>
                    <button>Web Design</button>
                    <button>Logo Design</button>
                    <button>Product Design</button>
                    <button>Audio creation</button>
                 </div>
            </div>
            <div className="right">
                <img src="./img/man.png" alt="#" />
            </div>
        </div>
        </div>
  )
}

export default Featured