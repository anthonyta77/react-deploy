import {education} from './Data_component'
import React from "react"
import ReactDOM from "react-dom"



class ComponentEducationList extends React.Component{
    
    render(){
        const educationSort = education.sort((a,b)=>(
            b.id-a.id
        ))
        const educationComponent = education.map((educationSort) => (
            <EducationComponent
            key={'id -' + educationSort.id}
            company={educationSort.company}
            location={educationSort.location}
            date={educationSort.date}
            contract={educationSort.contract}
            tools={educationSort.tools}
            skills={educationSort.skills}
            web={educationSort.web}
            resume={educationSort.description}
            />
        ));  
    return(
       <div>
            {educationComponent}
        </div>
    )
}
}

class EducationComponent extends React.Component{
    render(){
        return(
            <a className='article-link' href={this.props.web} target="_blank">
            <div className="component-list-cv">
                
                <section className="date-cv">
                    <div className="period">
                        {this.props.date}
                    </div> 
                </section>
                <section className="description">
                    <section className="description-cv">
                        <p className='position'>{this.props.contract}</p>
                        <p className='company'>{this.props.company}</p>
                        <p className='location'>{this.props.location}</p>
                        <p className="contract"></p>
                    </section>
                    <section className="descriptionmission">
                        <p className='mission'>{this.props.resume}</p> 
                    </section>
                </section>
            </div>
            </a>
        )
    }
}

export default (EducationComponent,ComponentEducationList)