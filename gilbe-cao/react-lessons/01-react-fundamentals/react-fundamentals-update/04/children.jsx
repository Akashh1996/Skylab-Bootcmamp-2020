function Sum({a,b}) {
    return <h1>{a} + {b} = {a + b}</h1>;
  }
  
  function ConditionalDisplay(props) {
    return (<div>
        {props.isVisible ? props.children : null}
    </div>);
  }
  ConditionalDisplay.propTypes  = {
    isVisible: PropTypes.bool.isRequired
  };
  
  const state = {
    showSum: true
  };
  
  function render() {
    ReactDOM.render(<ConditionalDisplay isVisible={state.showSum}>
                    <h1>A <span>Sum</span></h1>
                      <Sum a={4} b={2} />
                    </ConditionalDisplay>,
      document.getElementById('root')
    );
  };
  
  setInterval(()=> {
    state.showSum = !state.showSum;
    render();  
  }, 2000);
  
  