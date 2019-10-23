import Mock from "mockjs";

Mock.mock("/getChartData.api", options => {
  return getNumbers();
});

const getNumbers = () => {
  var count = 7;
  var Arr = new Array(); //原数组
  //给原数组Arr赋值
  for (var i = 0; i < count; i++) {
    Arr[i] = i + 1;
  }
  var d1 = new Date().getTime();
  Arr.sort(function() {
    return 0.5 - Math.random();
  });
  console.log(Arr);
  var d2 = new Date().getTime();
  console.log("运算耗时" + (d2 - d1));

  return Arr;
};
