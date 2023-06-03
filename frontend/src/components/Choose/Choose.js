import React from 'react'
import './Choose.css'
import Lecturer from '../../imgs/lecturer.png' 
import HOD from '../../imgs/HOD.png'
import Photocopy from '../../imgs/Photocopy.png'
import ExamsOfficer from '../../imgs/Exam Officer.png'
import Bulb from '../../imgs/bulb.png'   

const Choose = () => {
  return (
    <section className='choose-wrapper' id = 'choose-wrapper'>
        <div className='flexCenter choose-head'>
            <img src={Bulb} alt=''/>
            <h2>Kindly select your status</h2>
        </div>
        <div className='flexCenter'>
                <div className='flexCenter choose-container'>
                    <div className=' flexCenter div1'>
                        <div className='lec'>
                            <img src={Lecturer} alt=''/>
                        </div>
                        <span>Lecturer</span>
                    </div>
                    <div className='flexCenter div2'>
                    <div className='examsofficer'>
                            <img src={ExamsOfficer} alt=''/>
                        </div>
                        <span>ExamsOfficer</span>
                    </div>
                    <div className='flexCenter div3'>
                    <div className= 'hod'>
                            <img src={HOD} alt=''/>
                        </div>
                        <span>H.O.D</span>
                    </div>
                    <div className='flexCenter div4'>
                    <div className='photocopy'>
                            <img src={Photocopy} alt=''/>
                        </div>
                        <span>Photocopy Unit</span>
                    </div>
                </div>
        </div>
    </section>
  )
}

export default Choose