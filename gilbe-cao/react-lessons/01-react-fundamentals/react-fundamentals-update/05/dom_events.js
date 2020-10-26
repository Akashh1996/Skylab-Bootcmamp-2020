function Events(props) {
    const clickHandler = console.log;
    return (<button onClick={clickHandler}>Make an event</button>);
  }
  
  ReactDOM.render(<Events />,
    document.getElementById('root')
  );
  