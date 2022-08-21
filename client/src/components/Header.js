

const Header = (props) => {
  return (
    <header className="Header">
      <div className="header-year-container">
        <button className ='back-year-button' onClick={props.backYear}>Back</button>
        <h1>{props.yearNum}</h1>
        <button className ='forward-year-button' onClick={props.forwardYear}>Forward</button>
      </div>
    </header>
  );
}

export default Header;