import {article} from './Data_component'
import React from "react"
import ReactDOM from "react-dom"



class ComponentArticleList extends React.Component{
    
    render(){
        const articleSort = article.sort((a,b)=>(
            a.id-b.id
        ))
        const articleComponent = article.map((articleSort) => (
            <ArticleComponent
            key={'id -' + articleSort.id}
            title={articleSort.title}
            company={articleSort.company}
            date_publication={articleSort.date_publication}
            web={articleSort.web}
            author={articleSort.author}
            resume={articleSort.resume}
            img={articleSort.img}
            />
        ));  
    return(
       <div>
            {articleComponent}
        </div>
    )
}
}

class ArticleComponent extends React.Component{
    render(){
        return(
            <a className='article-link' href={this.props.web} target="_blank">
            <div className="component-list-cv">
                
                <section className="date-cv">
                    <div className="period">
                        {this.props.date_publication}
                    </div>
                    <img className='img-article'
                    src={this.props.img}
                    alt="img_article"
                    height="100"
                    width="130"/> 
                </section>
                <section className="description">
                    <section className="description-cv">
                        <p className='position'>{this.props.company}</p>
                        <p className='company'>{this.props.author}</p>
                        <p className='location'>{this.props.title}</p>
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

export default (ArticleComponent,ComponentArticleList)