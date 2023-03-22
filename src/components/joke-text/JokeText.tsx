import { FC, memo, useEffect } from 'react';
import useTypingJoke from '../../hooks/useTypingJoke';

interface Props {
  text: string;
  setSetupIsReady?: React.Dispatch<React.SetStateAction<boolean>>;
}

const JokeText: FC<Props> = ({ text, setSetupIsReady }) => {
  const jokeText = useTypingJoke(text);

  useEffect(() => {
    if (jokeText.length !== text.length) return;
    setSetupIsReady && setSetupIsReady(true);
  }, [jokeText]);

  return <div>{jokeText}</div>;
};

export default memo(JokeText);