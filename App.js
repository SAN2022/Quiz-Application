import './App.css';
import React, { version } from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import questions from './questions';
import {useState} from 'react';

function App() {  
  const [questionIndex, setQuestionIndex] = useState(0);
  const present_question = questions[questionIndex];  
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);
  const get_Choice = (i)=>
  {
    if(present_question.answer === i)
    {
      setScore(score+1);
    }
    const next_question = questionIndex+1;
    if(next_question < questions.length)
    {
      setQuestionIndex(questionIndex+1);
    }
    else
    {
      setResult(true);      
    }    
  }
    return (
      <div className='App'>
        <div className='quiz_box'>
          {result?(<h1 id='score'>Your score is {score}</h1>):(
          <>
          <div className='quiz_questions'>
              {present_question.question}  
          </div>
          <div className='quiz_options'>
            <ul className='quiz_ul'>

                {present_question.options.map
                ((option,i) =>                   
                  { return <li className='quiz_li' onClick={()=> get_Choice(i)}>{option}</li>}
                )}                

            </ul>
          </div>
            </>
            )}
          <div className='resultbox'></div>
        </div>
      </div>      
    )
  
}

export default App;