import React from 'react'
import Title from '../../widgets/typography/title'
import News_card from './components/news_card'
import './news.css'

const News_container = (props) => {
    return (
        <div>
             <Title color="#222">Latest News</Title>
        <div className="news_container">
           
            <News_card description="Lorem ipsum, or lipsum as it is sometimes known, 
            is dummy text used in laying out print, graphic or web designs. 
            The passage is attributed to an unknown typesetter in the 15th century who is thought to have 
            scrambled parts of Cicero's De Finibus 
            Bonorum et Malorum for use in a type specimen book.">Heading 1</News_card>
            <News_card description="Lorem ipsum, or lipsum as it is sometimes known, 
            is dummy text used in laying out print, graphic or web designs. 
            The passage is attributed to an unknown typesetter in the 15th century who is thought to have 
            scrambled parts of Cicero's De Finibus 
            Bonorum et Malorum for use in a type specimen book.">Heading 2</News_card>

            <News_card description="Lorem ipsum, or lipsum as it is sometimes known, 
            is dummy text used in laying out print, graphic or web designs. 
            The passage is attributed to an unknown typesetter in the 15th century who is thought to have 
            scrambled parts of Cicero's De Finibus 
            Bonorum et Malorum for use in a type specimen book.">Heading 3</News_card>


        </div>
        </div>
    )

}
export default News_container;
