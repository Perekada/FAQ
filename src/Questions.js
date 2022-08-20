import React from 'react'
import Question from './Question'
import questions from './data'

function Questions(){
    return(<main>
      <section className='container'>
      <div>
        <h2>Frequently asked questions about new pages(FAQ)</h2>
      </div>
      <section className='info'>
        {questions.map((question) =>{
          return(
            <Question question={question} key={question.id}/>
            )
          }
          )}
          </section>
        </section>
      </main>
    )
  }

export default Questions
