
import{useState}from"react";
function App()
{
  const questions=[
    {
      questionText:"1.Which is the frontend framework used for creating web apps?",
       answerOption:[
        {answerText:"Node js",isCorrect:false},
        {answerText:"React js",isCorrect:true},
        {answerText:"Express js",isCorrect:false},
        {answerText:"Mongo DB",isCorrect:false},

      ]
    },
    {
      questionText:"2.Which is the web server among this?",
      answerOption:[
        {answerText:"Node js",isCorrect:true},
        {answerText:"React js",isCorrect:false},
        {answerText:"Expressjs",isCorrect:false},
        {answerText:"Angularjs",isCorrect:false},
      ]
    },
    {
      questionText:"3.What can you build using javascript?",
      answerOption:[
        {answerText:"Web applications",isCorrect:false},
        {answerText:"web server",isCorrect:false},
        {answerText:"Native mobile applications and Hybrid mobile applications",isCorrect:false},
        {answerText:"All of the above",isCorrect:true},

      ]
    },
    {
      questionText:"4.What can we create using reactjs?",
      answerOption:[
        {answerText:"It's used for buildingInteractive user interfaces and web applications",isCorrect:true},
        {answerText:"It is used to build single page,multiple page and hybrid web application",isCorrect:false},
        {answerText:"We can create a new database",isCorrect:false},
        {answerText:"we can generate dynamic page content",isCorrect:false},
      ]
    },
    {
      questionText:"5.Which is object-oriented programming language(OOPs)?",
      answerOption:[
        {answerText:"Java",isCorrect:false},
        {answerText:"C",isCorrect:false},
        {answerText:"Python",isCorrect:true},
        {answerText:"SQL",isCorrect:false},

      ]
    },
    {
      questionText:"6.Which language is the backbone of any website?",
      answerOption:[
        {answerText:"Java",isCorrect:false},
        {answerText:"HTML",isCorrect:true},
        {answerText:"javascript",isCorrect:false},
        {answerText:"Python",isCorrect:false},
      ]
    },
    {
      questionText:"7.By using which language can we add background color to a website?",
      answerOption:[
        {answerText:"CSS",isCorrect:true},
        {answerText:"HTML",isCorrect:false},
        {answerText:"Javascript",isCorrect:false},
        {answerText:"Python",isCorrect:false},
      ]
    },
    {
      questionText:"8.what is the element/tag in HTML to start a paragraph?",
      answerOption:[
        {answerText:"<br>",isCorrect:false},
        {answerText:"<p>",isCorrect:true},
        {answerText:"<li>",isCorrect:false},
        {answerText:"<h1>",isCorrect:false},
      ]
    
    },
    {
      questionText:"9.What are the formatting elemnts in HTML?",
      answerOption:[
        {answerText:"<b>BOLD TEXT",isCorrect:false},
        {answerText:"<i>ITALIC TEXT",isCorrect:false},
        {answerText:"<em>EMPHASIZED TEXT",isCorrect:false},
        {answerText:"ALL OF THE ABOVE",isCorrect:true},

      ]
    },
    {
      questionText:"10.How many types of selctors are there in CSS?",
      answerOption:[
        {answerText:"2",isCorrect:false},
        {answerText:"3",isCorrect:false},
        {answerText:"4",isCorrect:false},
        {answerText:"5",isCorrect:true},
      ]
    }
  ]
  const[currentQuestion,setCurrentQuestion]=useState(0)
  const[showScore,setShowScore]=useState(false)//score board display atlast ,if we write true means score board display starting ,we don't want  it. 
  const[score,setScore]=useState(0)
  const Handle=(isCorrect)=>{
    if(isCorrect)
    {
      setScore(score+1)
    }
    const nextQuestion=currentQuestion+1
    if(nextQuestion<questions.length)
    {
      setCurrentQuestion(nextQuestion)
    }
    else
    {
      setShowScore(true)

    }
  }
  return(
    <div className="quiz">
      {showScore?(
        <div className="score-section">
          YOU HAVE SCORED {score}OUT OF {questions.length}!!!
          </div>
      ):(
        <>
        <div className="question-section">
          <span>QUESTION{currentQuestion+1}</span>/{questions.length}
        </div>
        <div className="question-text">
          {questions[currentQuestion].questionText}
        </div>
        <div className="answer-section">
          {questions[currentQuestion].answerOption.map((answerOption)=>(
            <button onClick={()=>Handle(answerOption.isCorrect)}>{answerOption.answerText}</button>
          ))}
        </div>
        </>
      )
      }
    </div>
  )
}
export default App