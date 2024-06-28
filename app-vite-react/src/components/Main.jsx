
function Card(props) {
  return (
    <div className="card-container">
      <div id="post-card">
       <h2>Acquista {props.name}</h2>
       <img src={props.url} alt="" />
      </div>
    </div>
  );
}

export { Card };