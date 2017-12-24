var SingleLinkedList = (function () {
    function Nodde(data) {
        this.data = data;
        this.next = null;
    }

    function SingleLinkedList() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    SingleLinkedList.prototype.toString = function () {
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

    SingleLinkedList.prototype.pushBack = function (data) {
        if (!data) {
            return;
        }
        var n = new Nodde(data);
        if (this.count == 0) {
            this.head = this.tail = n;
            ++this.count;
        } else {
            this.tail.next = n;
            this.tail = n;
            ++this.count;
        }
    };

    SingleLinkedList.prototype.checkSame = function (s1, s2) {
        var l1 = s1.count;
        var l2 = s2.count;
        var h1 = s1.head;
        var h2 = s2.head;
        var dl;
        if (l1 == l1) {
            dl = 0;
        }
        if (l1 > l2) {
            dl = l1 - l2;
            var count = 0;
            while (count < dl) {
                h1 = h1.next;
                ++count;
            }
        }
        if (l1 < l2) {
            dl = l2 - l1;
            var count = 0;
            while (count < dl) {
                h2 = h2.next;
                ++count;
            }
        }

        while (h1 != null && h2 != null) {
            if (h1.data == h2.data) {
                return h1.data;
            }
            h1 = h1.next;
            h2 = h2.next;
        }

    };
    return {

        SingleLinkedList: SingleLinkedList,
        createSingleleList: function () { return new SingleLinkedList(); }
    }
})();

var test = (function () {

    function testcheckSame() {
        var l1 = SingleLinkedList.createSingleleList();
        var a = 1;
        var b = 2;
        var c = 3;
        var d = 4;
        var x = 5;
        var y = 6;
        var z = 7;
        l1.pushBack(a);
        l1.pushBack(b);
        l1.pushBack(c);
        l1.pushBack(d);
        l1.pushBack(x);
        l1.pushBack(y);
        l1.pushBack(z);
        var l2 = SingleLinkedList.createSingleleList();
        l2.pushBack(22);
        l2.pushBack(21);
        l2.pushBack(x);
        l2.pushBack(y);
        l2.pushBack(z);

        var same = l1.checkSame(l1, l2);

        var test = same == 5 ? "true" : "false";
        console.log("checkSame with dif  len: ", test);

    }
    return {
        testcheckSame: testcheckSame,
    };

})();
test.testcheckSame();

