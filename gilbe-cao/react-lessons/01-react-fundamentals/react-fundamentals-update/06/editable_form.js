// https://codepen.io/liammclennan/pen/rdEdQL?editors=0010

class Identity extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: ""
    };
    this.onFieldChange = this.onFieldChange.bind(this);
  }
  onFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  render() {
    return (
      <form>
          <input type="text" name="firstName" value={this.state.firstName} placeholder="First name" onChange={this.onFieldChange} />
          <input type="text" name="lastName" value={this.state.lastName} placeholder="Last name" onChange={this.onFieldChange} />
      </form>);
  }
}  

ReactDOM.render(<Identity />,
  document.getElementById('root')
);
