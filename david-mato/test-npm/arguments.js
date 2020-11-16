// function(exports, module, require, __filename, __dirname)

function dynamicArgs(...args) {
  const [first, second, third, ...rest] = [...args];
  console.log(first, second, third, ...rest);
}

dynamicArgs(1, 2, 3, 5, 1, 7);
