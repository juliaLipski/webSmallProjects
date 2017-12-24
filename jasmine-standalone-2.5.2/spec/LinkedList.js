describe("DowbleLinkedList test list empty", function (){
    var l;
    var data;
     var obj;
    beforeEach(function (){
        l = DowbleLinkedList.createDowbleList();
        data = 21;
        obj = {a: 5};
    });
    it("testPushFront first", function (){ 
        l.pushFront(data);
        var dataInlist = l.head.data;
        expect(dataInlist).toEqual(data);
     
    });
    it("testPushFront undefined", function (){
        var dataInlist = l.pushFront(undefined);
        expect(dataInlist).not.toBeDefined();
    });
    it("testPushFront object", function (){
        var dataInlist = l.pushFront(obj);
        expect(dataInlist).toEqual(obj);
    });
    it("testPushFront boolean", function (){
        var b = false;
        l.pushFront(b);
        var dataInlist = l.head.data
        expect(dataInlist).toEqual(b);
    });
    it("testPushFront func", function (){
        var f = function () {
            return 5;
        };
        var dataInlist = l.pushFront(f);
        expect(dataInlist).toEqual(f);
    });
    it("testPushBack first", function (){
        l.pushBack(data);
        var dataInlist = l.head.data;
        expect(dataInlist).toEqual(data);
    });
    it("testPushBack boolean", function () {
        var b = true;
        var dataInlist = l.pushBack(b);
        expect(dataInlist).toEqual(b);
       // console.log(dataInlist);
    });
      it("testPushBack object", function () {
          var dataInlist = l.pushBack(obj);
          expect(dataInlist).toEqual(obj);
      });
     
      it("testPushBack func", function () {
          var f = function () {
              return 5;
          }
          var dataInlist = l.pushBack(f);
          expect(dataInlist).toBe(f);
      });
    it("testPushBack undefined", function () {
        var dataInlist = l.pushBack(undefined);
        expect(dataInlist).not.toBeDefined();
    });
    it("testPopFront", function () {
        var data = l.popFront();
        expect(data).not.toBeDefined();
    });
    it("testPopBack", function () {
        var data = l.popBack();
        expect(data).not.toBeDefined();
    });



    describe("DowbleLinkedList test list with 1 Node", function () {
        var first;
        beforeEach(function () {
            first = 21;
            l.pushBack(first);

        });
        it("testPopFront first", function () {
            var data = l.popFront();
            expect(data).toBe(first);
        });
        it("testPopBack first", function () {
            var data = l.popBack();
            expect(data).toBe(first);
        });
        it("testPushFront next", function () {
            var data = 22;
            l.pushFront(data);
            var dataInlist = l.head.data;
            expect(dataInlist).toEqual(data);
        });
        it("testPushBack next", function () {
            var data = 21
            l.pushBack(data);
            var dataInlist = l.tail.data;
            expect(dataInlist).toEqual(data);
        });




        describe("DowbleLinkedList test list many Nods", function () {

            var last;
            beforeEach(function () {
                last = 24;
                l.pushBack(first);
                l.pushBack(22);
                l.pushBack(23);
                l.pushBack(last);

            });

            it("testPopFront", function () {
                var data = l.popFront();
                expect(data).toEqual(first);

            });
            it("testPopBack", function () {
                var data = l.popBack();
                expect(data).toEqual(last);
            });
            it("testforEach not a func", function () {
                var nF = "not a func";
                var data = l.forEach(nF);
                expect(data).not.toBeDefined();
            });
        });
    });
});
/*function testforEach() {
        var l = DowbleLinkedList.createDowbleList();
        var a = 21;
        var b = 22;
        var c = 23;
        var arr = [46, 44, 42];
        var arrSt = arr.join(", ");
        l.pushFront(a);
        l.pushFront(b);
        l.pushFront(c);
        var nF = "not a func";
        var x = l.forEach(nF);
        test = x == false ? "true" : "false";
        console.log("forEach not a func: ", test);
        function f(data) {
            return data * 2
        };
        l.forEach(f);
        x = l.toString();
        test = x == arrSt ? "true" : "false";
        console.log("forEach a func: ", test);
    }*/
