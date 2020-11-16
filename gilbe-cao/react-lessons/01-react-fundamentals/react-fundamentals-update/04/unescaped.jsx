function DangerContainer(props) {
    return <p dangerouslySetInnerHTML={{__html:props.dangerous}} />;
  }
  
  function render() {
    ReactDOM.render(<DangerContainer dangerous="<strong>HELLO</strong>" />,
      document.getElementById('root')
    );
  };
  render();
  
  