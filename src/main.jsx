import { createRoot } from 'react-dom/client';
import './index.css'
import questions from './data';
import Question from './components/Question';


const R18_7 = () => {
    return(
    <div className='wrapper'>
        <section className='container'>
            <div className='title'>Questions</div>
            <ul className='questionContainer'>
            {questions.map((element) => {
               return <Question key={element.id} {...element} />
            })}
            </ul>
        </section>
    </div>
)}

const root = createRoot(document.getElementById('root'));
root.render(<R18_7 />)