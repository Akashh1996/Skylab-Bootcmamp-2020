// https://codepen.io/liammclennan/pen/LdKdrj

class Identity extends React.Component {
  render() {
    return (
      <form>
          <input type="text" name="firstName" value="" placeholder="First name" />
          <input type="text" name="lastName" value="" placeholder="Last name" />
      </form>);
  }
}  

ReactDOM.render(<Identity />,
  document.getElementById('root')
);
