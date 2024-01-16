// Quiz.js
import React from 'react'
import './quizpage.css'

export default class Quiz extends React.Component{
    render(){
        return(
            <>
            <div className="Main">
                <h1 className='question'>Question</h1>
                <div className="Totalquestions">1 of 15</div>
                <p>Which is the only mammal that can jump?</p>

                <div className="options">
                    <button className='option'>Dog</button>
                    <button className='option'>Elephant</button>
                    <button className='option'>Goat</button>
                    <button className='option'>Lion</button>
                </div>
                <div className="buttons">
                    <button id='previous' className='button'>Previous</button>
                    <button id='next' className='button'>Next</button>
                    <button id='quit' className='button'>Quit</button>
                </div>
            </div>
            </>
        )
    }
}