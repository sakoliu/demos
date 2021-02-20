// test1
var test1 = ((name) => {
  console.log('/*****  ' + name + ' op  *****/' + '\n');

  function fun (n, o) {
    console.log(o);
    return {
      fun (m) {
        return fun(m, n);
      }
    }
  }

  console.log('1)');
  var a = fun(0);
  a.fun(1); a.fun(2); a.fun(3);

  console.log('\n-----\n');

  console.log('2)');
  var b = fun(0).fun(1).fun(2).fun(3);

  console.log('\n-----\n');

  console.log('3)');
  var c = fun(0).fun(1);
  c.fun(2); c.fun(3);

  console.log('\n/*****  ' + name + ' ep  *****/');
})('test1');

// test2
var test2 = ((name, arr) => {
  var counter = 0;
  var res = [];

})(
  'test2',
  [[1,4], [3,8], [6,9], [15, 17], [16, 21]]
);
