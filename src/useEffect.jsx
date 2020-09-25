import React, { Fragment } from "react";

const BelajarUseEffect = () => {
  const [text, setText] = React.useState("");
  const [seconds, setSeconds] = React.useState(0);

  React.useEffect(
    function () {
      if (text.length) localStorage.setItem("text", text);
      console.log("text berhasil disimpan");
    },
    [text]
  );

  React.useEffect(function () {
    setText(localStorage.getItem("text"));
    setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    console.log("getitem");
  }, []);

  return (
    <Fragment>
      <h1>Latihan useEffect</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <h2>
        Waktu : {Math.floor(seconds / 60)} menit {seconds % 60} detik
      </h2>
    </Fragment>
  );
};

export default BelajarUseEffect;
