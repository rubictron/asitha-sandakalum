import React from 'react'
import Fade from "react-reveal"
import {
    StldVerticalTimeline,
    ExpContainer
} from './ExperienceElements'
import { 
    VerticalTimelineElement  
}  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import {
    MdWork as WorkIcon,
    MdSchool as SchoolIcon,
    MdStarRate as StarIcon
} from "react-icons/md"
const Experience = props => {

    


    return (
        <Fade left>
            <ExpContainer id="Experiment">
            <StldVerticalTimeline  lineColor={'blue'}   >
            
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff'  }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)'  }}
            dateClassName={'span-black'}
            date="February 2022 - Present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff'  }}
            icon={<WorkIcon />}
            >
            <h3 className="vertical-timeline-element-title">Aplication Engineer , II </h3>
            <h4 className="vertical-timeline-element-subtitle">Synopsys Lanka PVT LTD</h4>
            <p>
                Verdi, Vcs, Cloud Computing , Grid Computing, Docker , SLED   
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="March 2020 - February 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff'  }}
            icon={<WorkIcon />}
            
          >
            <h3 className="vertical-timeline-element-title">Application Engineer , I</h3>
            <h4 className="vertical-timeline-element-subtitle">Synopsys lanka PVT LTD</h4>
            <p>
              Verdi, Vcs, Verilog , Vhdl Python , Perl , Bash , Tcl , Product Validating 
            </p>
          </VerticalTimelineElement>
        
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 and 2019"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff'  }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Trainee software Engineer </h3>
            <h4 className="vertical-timeline-element-subtitle">IJSE panadura ( 2018 )</h4>
            <h4 className="vertical-timeline-element-subtitle">Sierra COnstruction PVT LTD ( 2019 )</h4>
            <p>
              OOP , Java ,React Fullstack
            </p>
          </VerticalTimelineElement>
          
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="January 2016 - March 2020"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff'  }}
            icon={<SchoolIcon />}
            
          >
            <h3 className="vertical-timeline-element-title">B.Sc. Eng (Second class lower devision)</h3>
            <h3 className="vertical-timeline-element-title"> in Electrical and Information Engineering  </h3>
            <h4 className="vertical-timeline-element-subtitle">Faculty of Engineering - University of Ruhuna</h4>
            <p>
        <h6>Committee member of Electrical and Information Engineering Society
        in 2017</h6>
        <h6>Publicity officer of Explorer Club in 2017</h6>
        <h6>Committee member of Electronic Circle   in 2019</h6>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2001 - 2014"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff'  }}
            icon={<SchoolIcon />}
            
          >
            <h3 className="vertical-timeline-element-title">Sripada Central Collage Hatton</h3>
            <h4 className="vertical-timeline-element-subtitle">Hatton</h4>
            <p>
                <h6>Deputy head prefect 2013-2014</h6>
                <h6>Prefect 2010-2014</h6>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff'  }}
            icon={<StarIcon />}
            
          />
        </StldVerticalTimeline>

                  </ExpContainer>


        </Fade>
            
    )
}


export default Experience
