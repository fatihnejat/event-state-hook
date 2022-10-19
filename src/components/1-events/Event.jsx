// * =======================================================
// *                     EVENTS
// * =======================================================

//? ReactJS, Tarayicilar arasi uyumluluk ve performans artisi gibi
//? sebeplerden oturu Sentetik Event olarak adilandirilan Olaylari
//? kullanir. Sentetik Event, aslinda tarayicinin dogal event'larinin
//? bir sarmalayici (Wrapper) arabirimle ortulmesi ile olusur. Bu sayede,
//? React ortaminda kullanilan event'larin bilindik tarayicilarda
//? sorunsuz calismasini saglanir.

//? Ayrinti icin : https://reactjs.org/docs/events.html

const Event = () => {
    let message = "Event Based Progrmming"
  const handleClick = () => {
    alert("Btn Clicked");
  };
  const handleClear = (msg) => {
    alert(msg);
  };
  const handleChange = (e) => {
    console.log(e.target);
    message="React"
    console.log(message);
  };


  return (
    <div className="container text-center mt-4">
        <h1>{message} </h1>
      <button onClick={handleClick} className="btn btn-danger m-2">Click</button>
      <button onClick={() => handleClear("Clear Btn Clicked")}className="btn btn-success">Clear</button>
      <button onClick={handleChange} className="btn btn-dark m-2">Change</button>
    </div>
  );
};

export default Event;
