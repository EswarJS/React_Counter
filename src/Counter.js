import { useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.count);

  let seconds = count % 60;
  let minutes = Math.floor(Math.floor(count / 60) % 60);
  let hours = Math.floor(Math.floor(count / 3600) % 3600);

  return (
    <p>
      {hours < 10 ? `0${hours}` : hours}:
      {minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}
    </p>
  );
};

export default Counter;
