import "./FooterStyles.css"

import React from 'react'
import {  FaHome,  FaMailBulk, FaPhone } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "white", marginRight: "1rem", marginLeft: "1rem"}}/>
                    <div>
                        <p>Karachi</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{color : "white", marginRight: "2rem"}}/>
                        0001-00100-1
                    </h4>
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{color : "white", marginRight: "2rem"}}/>
                        k20-1736
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4>Algorithm Project</h4>
                <p>We present you algorithm visualizer</p>
                
            </div>
        </div>
    </div>
  )
}

export default Footer
