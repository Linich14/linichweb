import React from "react"
import Lilith from '../assets/lilithv2.png'

export default function Banner() {
    return (
        <div className='header bg-gradient-to-t from-pink-300 via-pink-500 to-pink-600 min-w-full '>
            <div className="BANNER">
                
                <img src={Lilith} alt="?" className="lilithbanner"></img>
                
                
                <p className="lilithtexto">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Cupiditate voluptates quo necessitatibus atque maxime 
                    quidem magni corrupti facere libero culpa praesentium 
                    dolores iure eius,optio delectus soluta cumque vel odio!
                </p>
                             
            </div>
        </div>
    )
}
