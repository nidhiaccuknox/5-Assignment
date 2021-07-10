import { useRef, useState, useEffect} from "react";
import Dropdown from "../components/DropdownBar";
import {Link} from 'react-router-dom';

export default function StartPage() {

  const inputRef = useRef();
  const [username, setUsername] = useState('');
  const [topic, setTopic] = useState('0');

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  useEffect(() => {
    console.log('topic', topic);
    console.log('username', username);
  }, [topic, username])

  return (
    <div class='apps' style={{ backgroundImage: `url("https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F3000c855-f439-4ef9-bc43-22750b23e3fa_800x600.gif")` }}>
      <div class='start'>
        <button class='startButton' onClick={handleClick}>
          {
            username === '' ? (<Link to='/'>Start Quiz</Link>) : (
              <Link to={`/home/${username}/${topic}`}>Start Quiz</Link>
            )
          }
        </button>
        <input class='startInput' placeholder='Enter your name' ref={inputRef} />
        <Dropdown setTopic={setTopic}/>
      </div>
    </div>
  );
}