import React from "react";
import Resource from './resource'

const Cards = () => {
    return (
        <div class="container">
            <div className="cards">
                <Resource name='Pomodoro' type='Timer' link='https://pomofocus.io/' buttonText='Click here' color='green' />
            </div>
            <div className="cards">
                <Resource name='Quizlet' type='Flashcards' link='https://quizlet.com/latest' buttonText='Click here' color='green' />
            </div>
            <div className="cards">
                <Resource name='Notion' type='Productivity' link='https://www.notion.so/' buttonText='Click here' color='green' />
            </div>
            <div className="cards">
                <Resource name='MIT OCW' type='Learning' link='https://ocw.mit.edu/search/?s=department_course_numbers.sort_coursenum#electrical-engineering-and-computer-science' buttonText='Click here' color='green' />
            </div>
            <div className="cards">
                <Resource name='ToDOIst' type='Productivity' link='https://todoist.com/app/' buttonText='Click here' color='green' />
            </div>
            <div className="cards">
                <Resource name='W3Schools' type='Courses' link='https://www.w3schools.com/' buttonText='Click here' color='green' />
            </div>
            <div className="cards">
                <Resource name='Tab Manager' type='Organization' link='https://chrome.google.com/webstore/detail/tab-manager-plus-for-chro/cnkdjjdmfiffagllbiiilooaoofcoeff?hl=en' buttonText='Click here' color='green' />
            </div>
            <div className="cards">
                <Resource name='Google Podcasts' type='Learning' link='https://podcasts.google.com/' buttonText='Click here' color='green' />
            </div>
            <div className="cards">
                <Resource name='Google Podcasts' type='Learning' link='https://podcasts.google.com/' buttonText='Click here' color='green' />
            </div>
            <div className="cards">
                <Resource name='Power Thesaurus' type='Learning' link='https://chrome.google.com/webstore/detail/power-thesaurus/hhnjkanigjoiglnlopahbbjdbfhkndjk?hl=en' buttonText='Click here' color='green' />
            </div> <div className="cards">
                <Resource name='Book of Proof' type='Learning' link='https://www.people.vcu.edu/~rhammack/BookOfProof/Main.pdf' buttonText='Click here' color='green' />
            </div>



        </div>


    )

}

export default Cards;