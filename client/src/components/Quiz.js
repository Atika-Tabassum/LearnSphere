import React, {useState} from 'react';
import "./Quiz.css";

const QuizData = [
    {
        question: "Which language runs in a web browser?",
        options:[ "Java", "C", "Python", "JavaScript"],
        answer: 4
    },
    {
        question: "What does CSS stand for?",
        options:["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Cars SUVs Sailboats"],
        answer: 2
    },
    {
        question: "What does HTML stand for?",
        options: ["Hypertext Markup Language", "Hypertext Markdown Language", "Hyperloop Machine Language", "Helicopters Terminals Motorboats Lamborginis"],
        answer: 1
    },
    {
        question: "What year was JavaScript launched?",
        options: ["1996", "1995", "1994", "none of the above"],
        answer:2
    },
];

function QuizResult(props) {
    return (
      <>
      <div className='show-score'>
          Your Score:{props.score}<br/>
          Total Score:{props.totalScore}
      </div>
      <button id="next-button" onClick={props.tryAgain}>Try Again</button>
      </>
    )
  }

function Quiz(){

    const [currentQuestion, setCurrentQuestion] = useState(0);  //intially currentquestion's state is zero, ewill get the data of zero'th question
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const changeQuestion = () =>{ //when next button is clicked, currentquestn should be increased, its the number of the question
        updateScore();
        if(currentQuestion < QuizData.length - 1){
            setCurrentQuestion(currentQuestion+1);

            setClickedOption(0);
        }
        else{
            setShowResult(true);
        }
    }

    const updateScore = () => {
        if (clickedOption === QuizData[currentQuestion].answer){
            setScore(score+1);
        }
    }

    const resetAll = ()=>{
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }

    return(
        <div>
            <p className = "heading"> Exam</p>
            <div className="container">

                {showResult ? (
                    <QuizResult score = {score} totalScore = {QuizData.length} tryAgain = {resetAll} />
                ) : (
                    <>
                <div className = "question">
                    <span id = "ques num">{currentQuestion+1}. </span>
                    <span id = "ques txt">{QuizData[currentQuestion].question}</span>
                    
                </div>

                <div className="option-container">
                    {QuizData[currentQuestion].options.map((option,i) =>{
                        return(
                            <button 
                            //className = "option-btn"
                            //to show that the ans is selected
                            className = {`option-btn ${
                                clickedOption == i+1? "checked" : null
                            }`}
                            key={i}
                            onClick={()=> setClickedOption(i+1)}
                            >
                                {option}
                            </button>
                        )
                    })}
                </div>

                <input type = "button" value = "Next" id = "next-button" onClick = {changeQuestion}></input>

                </>
                )}
            </div>
        </div>
    )
}

export default Quiz;