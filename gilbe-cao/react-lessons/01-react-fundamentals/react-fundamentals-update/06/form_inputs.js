// https://codepen.io/liammclennan/pen/aYgYGp?editors=0010

function Frm() {
  return <div>
    <input type="text" value="react"/><br/>
    <textarea value="react"/><br/>
    <select value="sunday">
      <option value="saturday">Saturday</option>
      <option value="sunday">Sunday</option>
    </select></div>;
}  

ReactDOM.render(<Frm />,
  document.getElementById('root')
);
