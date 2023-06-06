import {cv, study} from './Data_component'
import React from "react"
import ReactDOM from "react-dom"



class ComponentCvList extends React.Component{
    
    render(){
        const curriculumvitae = cv.sort((a,b)=>(
            b.id-a.id
        ))
        const curriculumvitaeComponent = cv.map((curriculumvitae) => (
            <CvComponent
            key={'id -' + curriculumvitae.id}
            period={curriculumvitae.start_date + " - " + curriculumvitae.end_date}
            position={curriculumvitae.contract +" - "+curriculumvitae.position}
            company={curriculumvitae.company}
            location={curriculumvitae.location}
            contract={curriculumvitae.contract}
            mission={curriculumvitae.description}
            skill={curriculumvitae.skills}
            tools={curriculumvitae.tools}
            />
        ));  
    return(
       <div>
            {curriculumvitaeComponent}
        </div>
    )
}
}

class CvComponent extends React.Component{
    render(){
        return(
            <div className="component-list-cv">
               
                <section className="date-cv">
                    <div className="period">
                      
                        {this.props.period}</div>
                   
                </section>
                <section className="description">
                    <section className="description-cv">
                        <p className='position'>{this.props.position}</p>
                        <p className='company'>{this.props.company}</p>
                        <p className='location'>{this.props.location}</p>
                        <p className="contract"></p>
                    </section>
                    <section className="descriptionmission">
                        <p className='mission'>{this.props.mission}</p> 
                    </section>
                    <div className='skill-tool'>
                        <section className="skill">
                        {this.props.skill}
                            
                        </section>
                        <section className="tools">
                        {this.props.tools}
                        </section>
                    </div>
                </section>
            </div>
        )
    }
}

export default (CvComponent,ComponentCvList)