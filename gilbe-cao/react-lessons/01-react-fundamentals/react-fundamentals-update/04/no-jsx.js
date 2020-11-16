function Sum(props) {
    return React.createElement(
      'h1', 
      null, 
      props.a, ' + ', props.b, ' = ', props.a + props.b);
  }
  
  ReactDOM.render(
    React.createElement(
      'div', 
      null, 
      React.createElement(
        Sum, 
        {a:4, b:2}, 
        null)),
    document.getElementById('root')
  );