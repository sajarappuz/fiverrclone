import React from 'react'
import "./Home.scss"
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedby/TrustedBy'
import Slide from '../../components/Slide/Slide'
import { cards, projects } from '../../data';
import CatCard from '../../components/categoryCard/CatCard';
import ProCard from '../../components/ProjectCard/ProCard'

const Home = () => {
  return (
    <div className='home'>
      <Featured/>
      <TrustedBy/>
      <Slide arrowsScroll={5} slidesToShow={5}>
        {cards.map(card=>(
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of Freelance talent at your fingertips</h1>
           <div className="title">
            <img src="./img/check.png" alt="#" />
            The best for every budget
           </div>
           <p>finf high quality services at your fingertip at affordable price</p>
           <div className="title">
            <img src="./img/check.png" alt="#" />
            The best for every budget
           </div>
           <p>finf high quality services at your fingertip at affordable price</p>
           <div className="title">
            <img src="./img/check.png" alt="#" />
            The best for every budget
           </div>
           <p>finf high quality services at your fingertip at affordable price</p>
           <div className="title">
            <img src="./img/check.png" alt="#" />
            The best for every budget
           </div>
           <p>finf high quality services at your fingertip at affordable price</p>
          </div>
          
          <div className="item">
            <video src="./img/webvid.mp4" controls></video>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>fiverr business</h1>
             <h1>A business solution for freelancers how looking to exile 
              in their career
             </h1>
             <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven work experience
             </div>
             <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven work experience
             </div>
             <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven work experience
             </div>
             <button>Explore Fiverr Business</button>
          </div>
          
          <div className="item">
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png" alt="" />
          </div>
        </div>
      </div>
      <Slide arrowsScroll={4} slidesToShow={4}>
        {projects.map(project=>(
          <ProCard key={project.id} item={project} />
        ))}
      </Slide>
    </div>
  )
}

export default Home