import { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router';
import Quiz from '../components/Quiz';
import Timer from '../components/Timer';
// import Start from '../components/Start';
import data from '../data';

export default function HomePage() {

  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState('0');

  const { username, id } = useParams();

  console.log(username, id);

  console.log(data);

  const scorePyramid = useMemo(() => [

    { id: 1, score: "5" },
    { id: 2, score: "10" },
    { id: 3, score: "15" },
    { id: 4, score: "20" },
    { id: 5, score: "25" },
    { id: 6, score: "30" },
    { id: 7, score: "35" },
    { id: 8, score: "40" },
    { id: 9, score: "45" },
    { id: 10, score: "50" },

  ].reverse(), []);

  useEffect(() => {
    questionNumber > 1 && setEarned(scorePyramid.find((s) => s.id === questionNumber - 1).score)
  }, [scorePyramid, questionNumber]);

  console.log(stop);

  return (
    <div class='apph'>
      <div class='main bg-cover bg-local bg-no-repeat' style={{ backgroundImage: `url("https://us.123rf.com/450wm/radistmorze/radistmorze1906/radistmorze190600005/125521843-neon-sign-did-you-know-and-the-frame-on-the-brick-wall-background-.jpg?ver=6")` }}>

        {
          stop ? (<h1 class='endText'> {username} your total score is : {earned} 👏</h1>) :
            (
              <>
                <div class='top'>
                  <div class='timer'>
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>

                <div class='bottom'>
                  <Quiz
                    data={data[id]}
                    setStop={setStop}
                    setQuestionNumber={setQuestionNumber}
                    questionNumber={questionNumber}
                  />
                </div>
              </>
            )
        }

      </div>

      <div class='pyramid'>
        <ul class='scoreList'>
          {
            scorePyramid.map((m) => (
              <li class={questionNumber === m.id ? 'scoreListItem active' : 'scoreListItem'}>
                <span class='scoreListItemNumber'>{m.id}</span>
                <span class='scoreListItemAmount'>{m.score} Points  🏆</span>
              </li>
            ))
          }
        </ul>
      </div>

    </div>
  );
}



