
// 5 h;
// 5
var DowbleLinkedList = (function () {
    function Nodde(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }

    function DowbleLinkedList() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    DowbleLinkedList.prototype.toString = function () {
        var count = 0;
        var arrData = new Array(count);
        var x = this.count;
        var head = this.head;
        while (count < x) {
            arrData[count] = head.data;
            head = head.next;
            ++count;
        }
        return arrData.join(", ");
    };

    DowbleLinkedList.prototype.pushBack = function (data) {
         if (data === undefined ) {
            return;
        }
        var n = new Nodde(data);
        if (this.count == 0) {
            this.head = this.tail = n;
            ++this.count;
            return this.tail.data;
        }
        this.tail.next = n;
        n.prev = this.tail;
        this.tail = n;
        ++this.count;
        return this.head.data;
        

    };
    DowbleLinkedList.prototype.popBack = function () {
        if (this.count == 0) {
            return;
        }
        var tail = this.tail;
        if (this.count == 1) {
            this.head = this.tail = null;
            --this.count;
            return tail.data;
        }

        var x = this.tail.prev;
        this.tail.prev = null;
        this.tail = x;
        this.tail.prev = null;
        --this.count;
        return tail.data;

    };



    DowbleLinkedList.prototype.pushFront = function (data) {
        if (data === undefined ) {
            return;
        }
        var n = new Nodde(data);
        if (this.count == 0) {
            this.head = this.tail = n;
            ++this.count;
            return this.head.data;
        }
        this.head.prev = n;
        n.next = this.head;
        this.head = n;
        ++this.count;
        return this.head.data;
    };

    DowbleLinkedList.prototype.popFront = function () {
        if (this.count == 0) {
            return;
        }
        var head = this.head;

        if (this.count == 1) {
            this.head = this.prev = null;
            --this.count;
            return head.data;
        }

        var x = this.head.next;
        this.head.next = null;
        this.head = x;
        this.head.prev = null;
        --this.count;
        return head.data;

    };

    DowbleLinkedList.prototype.forEach = function (func) {
        if (typeof func !== "function") {
            return;
        }

        var h = this.head;
        var count = 0;
        var x = this.count;

        while (count < x) {
            var d = func(h.data);
            h.data = d;
            h = h.next;
            ++count;

        }
    };

    DowbleLinkedList.prototype.findFirst = function (func) {
        if (typeof func !== "function") {
            return;
        }
        var h = this.head;

        while (h) {
            var cond = func(h);
            if (cond) {
                return h.data;
            }

            h = h.next;
        }
        return;
    };

    DowbleLinkedList.prototype.findLast = function (func) {
        if (typeof func !== "function") {
            return;
        }
        var t = this.tail;
        while (t) {
            var cond = func(t);
            if (cond) {
                return t.data;
            }
            t = t.next;
        }
        return;
    };

    DowbleLinkedList.prototype.splise = function (l1, l2) {
        if (!l1) {
            return l2;
        }
        if (!l2) {
            return l1
        }
        l1.tail.next = l2.head;
        l2.head.prev = l1.tail;
        l1.tail = l2.tail;
        l2.tail = l2.head = null;
        l1.count = l1.count + l2.count;
        return l1;
    };
    DowbleLinkedList.prototype.equals = function (l1, l2) {
        if (l1.count != l2.count) {
            return false;
        }
        var arr1 = l1.toString();
        var arr2 = l2.toString();
        for (var i = 0; i < arr1.length; ++i) {
            if (arr1[i] != arr2[i]) {
                return false;
            }
        }
        return true;
    };
    


    return {
        Nodde: Nodde,
        createNode: function (data) { return new Nodde(data) },
        DowbleLinkedList: DowbleLinkedList,
        createDowbleList: function () { return new DowbleLinkedList(); }
    }
})();
/*
var test = (function () {

    function testPushFront() {
        var l = DowbleLinkedList.createDowbleList();
        var a = 21;
        var b = 22;
        var c = 23;
        var data = l.pushFront(null);
        var test = data == undefined ? "true" : "false";
        console.log("pushFront null: ", test);
        data = l.pushFront(a);
        test = data == a ? "true" : "false";
        console.log("pushFront first: ", test);
        l.pushFront(b);
        data = l.pushFront(c);
        test = data == c ? "true" : "false";
        console.log("pushFront next: ", test);
    }

    function testpopFront() {
        var l = DowbleLinkedList.createDowbleList();
        var a = 21;
        var b = 22;
        var c = 23;
        var d = 24;
        var arr = [22, 23, 24];
        var arrSt = arr.join(", ");
        var data = l.popFront();
        var test = data == undefined ? "true" : "false";
        console.log("popFront empty: ", test);
        l.pushFront(a);
        data = l.popFront();
        test = data == a ? "true" : "false";
        console.log("popFront first: ", test);
        l.pushFront(a);
        l.pushFront(b);
        data = l.popFront();
        test = data == b ? "true" : "false";
        console.log("popFront next: ", test);
    }

    function testPushBack() {
        var l = DowbleLinkedList.createDowbleList();
        var a = 21;
        var b = 22;
        var c = 23;
        var data = l.pushBack(null);
        var test = !data ? "true" : "false";
        console.log("pushBack null: ", test);
        data = l.pushBack(a);
        test = data == a ? "true" : "false";
        console.log("pushBack first: ", test);
        data = l.pushBack(b);
        test = data == b ? "true" : "false";
        console.log("pushBack next: ", test);
        console.log(l.toString());

    }

    function testpopBack() {
        var l = DowbleLinkedList.createDowbleList();
        var a = 21;
        var b = 22;
        var c = 23;
        var d = 24;
        var data = l.popBack();
        var test = data == undefined ? "true" : "false";
        console.log("popBack empty: ", test);
        l.pushBack(a);
        data = l.popBack();
        test = data == a ? "true" : "false";
        console.log("popBack len = 1 : ", test);
        l.pushBack(b);
        // l.pushBack(c);
        // l.pushBack(d);
        data = l.popBack();
        test = data == b ? "true" : "false";
        console.log("popBack next: ", test);

    }

    function testforEach() {
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
    }

    function testFindFirst() {
        var l = DowbleLinkedList.createDowbleList();
        var a = 21;
        var b = 22;
        var c = 23;
        l.pushFront(a);
        l.pushFront(b);
        l.pushFront(c);
        var nF = "not a func";
        var x = l.findFirst(nF);
        test = x == undefined ? "true" : "false";
        console.log("findFirst not a func: ", test);
        function f(h) {
            var test = h.data % 2 == 0 ? true : false;
            return test;
        };
        x = l.findFirst(f);
        test = x == b ? "true" : "false";
        console.log("findFirst a func: ", test);
        function f1(h) {
            var test = h.data == 88 ? true : false;
            return test;
        };
        x = l.findFirst(f1);
        test = x == undefined ? "true" : "false";
        console.log("findFirst a func: ", test);
    }

    function testFindLast() {
        var l = DowbleLinkedList.createDowbleList();
        var a = 21;
        var b = 22;
        var c = 23;
        var d = 24;
        l.pushBack(a);
        l.pushBack(b);
        l.pushBack(c);
        l.pushBack(d);
        var nF = "not a func";
        var x = l.findLast(nF);
        test = x == undefined ? "true" : "false";
        console.log("findLast not a func: ", test);
        function f(t) {
            var test = t.data % 2 === 0 ? true : false;
            return test;
        };
        x = l.findLast(f);
        test = x == d ? "true" : "false";
        console.log("findLast if exist many same: ", test);
        function f1(h) {
            var test = h.data == 88 ? true : false;
            return test;
        };
        x = l.findLast(f1);
        test = x == undefined ? "true" : "false";
        console.log("findLast a func: ", test);
    }

    function testSplise() {
        var l1 = DowbleLinkedList.createDowbleList();
        var l2 = DowbleLinkedList.createDowbleList();
        var a = 21;
        var b = 22;
        var c = 23;
        var x = 2;
        var y = 3;
        var z = 4;
        var arr1 = [21, 22, 23];
        var arrStl1 = arr1.join(", ");
        var arr2 = [2, 3, 4];
        var arrStl2 = arr2.join(", ");
        var arrS = [21, 22, 23, 2, 3, 4];
        var arrStl3 = arrS.join(", ");
        l1.pushBack(a);
        l1.pushBack(b);
        l1.pushBack(c);
        l2.pushBack(x);
        l2.pushBack(y);
        l2.pushBack(z);
        l1.splise(l1);
        var item1 = l1.toString();
        var test = item1 == arrStl1 ? "true" : "false";
        console.log("splise only list1: ", test);
        l1.splise(l2);
        item1 = l2.toString();
        test = item1 == arrStl2 ? "true" : "false";
        console.log("splise only list2: ", test);
        l1.splise(l1, l2);
        item1 = l1.toString();
        test = item1 == arrStl3 ? "true" : "false";
        console.log("splise l1+ l2: ", test);
    }

    function testEquals() {
        var l1 = DowbleLinkedList.createDowbleList();
        l1.pushFront(21);
        l1.pushBack(22);
        l1.pushBack(23);
        l1.pushBack(24);
        l1.pushBack(25);
        var l2 = DowbleLinkedList.createDowbleList();
        l2.pushFront(21);
        l2.pushBack(22);
        l2.pushBack(23);
        l2.pushBack(24);
        var eq = l1.equals(l1, l2);
        var test = !eq ? "true" : "false";
        console.log("equals with dif len: ", test);
        l2.pushBack(25);
        var eq = l1.equals(l1, l2);
        var test = eq ? "true" : "false";
        console.log("equals with same Node : ", test);
        l2.popBack();
        l2.pushBack(27);
        var eq = l1.equals(l1, l2);
        var test = !eq ? "true" : "false";
        console.log("equals with same Len dif Node : ", test);

    }

    return {
        testPushFront: testPushFront,
        testPushBack: testPushBack,
        testpopBack: testpopBack,
        testpopFront: testpopFront,
        testforEach: testforEach,
        testFindFirst: testFindFirst,
        testFindLast: testFindLast,
        testSplise: testSplise,
        testEquals: testEquals
    }



})();
var l1 = DowbleLinkedList.createDowbleList();
        l1.pushBack(21);
        l1.pushBack(22);
        l1.pushBack(23);
        l1.pushBack(24);
        l1.pushBack(25);

var x = DowbleLinkedList.createNode(21);
var a = DowbleLinkedList.createNode(22);
var b = DowbleLinkedList.createNode(23);
var c = DowbleLinkedList.createNode(24);
var d = DowbleLinkedList.createNode(25);

x.next = a;
a.prev = x;
a.next = b;
b.prev = a;
b.next = c;
c.prev = b;
c.next = d;
d.prev = c;

console.log(l1.cut(b,d));

console.log(l1);

//console.log(l1.toString());

//console.log(l1.cut(a,c));

//console.log(l1);
//test.testPushFront();
//test.testpopFront();
//test.testPushBack();
//test.testpopBack();
//test.testforEach();
//test.testFindFirst();
//test.testFindLast();
//test.testSplise();
//test.testEquals();
*/
