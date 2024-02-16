import * as React from "react";

interface props {
  text: string;
}

const Iterative: React.FC<props> = ({ ...props }) => {
  const [msg, setMsg] = React.useState("");
  const [msgInterval, setMsgInterval] = React.useState<any>();
  const [running, setRunning] = React.useState(true);

  React.useEffect(() => {
    let idx = 0;
    let msg = '';
    const interval = setInterval(() => {
      if (idx < props.text.length) {
        const letter = props.text[idx];
        idx++;
        msg += letter;
        setMsg(msg);
      }
    }, 100);
    setMsgInterval(interval);
  }, []);

  React.useEffect(() => {
    if (msg == props.text) {
      clearInterval(msgInterval);
      setRunning(false);
    }
  }, [msg]);
  return (
    <>{msg}{running && '_'}</>
  );
};

export default Iterative;
