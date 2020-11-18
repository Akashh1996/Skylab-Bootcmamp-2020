function DangerContainer(props) {
    return <p>{props.dangerous}</p>;
  }
  
  ReactDOM.render(<DangerContainer dangerous="<strong>HELLO</strong>" />,
                  document.getElementById('root')
  );
  
  