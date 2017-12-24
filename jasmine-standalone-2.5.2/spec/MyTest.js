describe("my test disc", function(){
     var x = 0;
  beforeEach(function() {
    x = 15;
    console.log('x',x);
  });
it("getSum x+x", function(){
      var sum = 30;
      var b = getSum(x,x); 
    expect(b).toBe(sum);
  });



describe("my test sum", function()
{
      var y = 0;
  beforeEach(function() {
        y = 15;
     console.log('y',y);
  
  });
/*it("getSum is not number", function(){
      var sum = undefined;
      var b = getSum('sss',2) 
    expect(b).toBe(sum);
  
  });*/

it("getSum is x+x", function(){
       var b = getSum(y,y)
    expect(30).toBe(b);
  });

  it("getSum 2 numbers", function(){
      var sum = 5;
      var b = getSum(3,2) 
    expect(b).toBe(sum);
  });

    });
});