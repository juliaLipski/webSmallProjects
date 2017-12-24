'use strict';
var eventCentral = (function () {
    function Dispecher() {
        this.topics = {};
        this.addcallBack = true;
    }

    Dispecher.prototype.regester = function (topicI, callBack) {
        var topic;
        if (!topicI || typeof callBack !== "function" || !this.addcallBack) {
            return
        }
        if (typeof topicI == "string") {
            topic = topicI;
        }
        if (typeof topicI == "number" || typeof topicI == "object") {
            topic = JSON.stringify(topicI);
        }

        if (!(this.topics[topic])) {
            this.topics[topic] = [];
        }
        this.topics[topic].push(callBack);
        return this.topics[topic];
    };

    Dispecher.prototype.unrejester = function (callBack) {
        if (!callBack) {
            return
        }
        for (var topic in this.topics) {
            var i = this.topics[topic].indexOf(callBack);
            var x;
            if (i > -1) {
                x = this.topics[topic][i];
                this.topics[topic].splice(i, 1)
            }
        }
        return x;
    };

    Dispecher.prototype.close = function () {
        return this.addcallBack = false;
    };


    Dispecher.prototype.clear = function (disp) {
        return disp.topics = {};
    };

    Dispecher.prototype.send = function (message) {
        if (!(this.topics[message[topic]])) {
            return
        }
        this.topics[message[topic]].forEach(function (element) {
            element(message);
        })
    };

    return {
        Dispecher: Dispecher,
        createDispecher: function () { return new Dispecher() }
    }
})();

var test = (function () {
    function callBack1(el) {
        return el.toUpperCase();

    }
    function callBack2(el) {
        return el[0];
    }
    function callBack3(el) {
        return el + 5
    }
    function assert(cond, message) {
        var test = cond ? "true" : "false";
        var mess = message ? message : "test is: "
        console.log(mess, test);
    }
    function checkRegesterTopic() {
        var c = eventCentral.createDispecher();
        var f1 = callBack1;
        var x = [];
        x.push(f1);
        var d = c.regester("string", f1);
        var s1 = JSON.stringify(x);
        var s2 = JSON.stringify(d);
        assert(s1 == s2, "topic string ");
        d = c.regester({ string: 123 }, f1);
        s1 = JSON.stringify(x);
        s2 = JSON.stringify(d);
        assert(s1 == s2, "topic object ");
        d = c.regester(123, f1);
        s1 = JSON.stringify(x);
        s2 = JSON.stringify(d);
        assert(s1 == s2, "topic number ");
        d = c.regester(undefined, f1);
        s2 = JSON.stringify(d);
        assert(s2 == undefined, "topic undefined ");
        // console.log(c);

    }
    function checkRegesterTestCb() {
        var c = eventCentral.createDispecher();
        var f = "not a func";
        var d = c.regester("string", f);
        assert(d == undefined, " callBack not a func")
        var f1 = callBack1;
        var f2 = callBack2;
        var f3 = callBack3;
        var x = [];
        x.push(f1);
        d = c.regester("string", f1);
        var s1 = JSON.stringify(x);
        var s2 = JSON.stringify(d);
        assert(s1 == s2, "1 callBack on 1 topic")
        x.push(f2);
        d = c.regester("string", f2);
        s1 = JSON.stringify(x);
        s2 = JSON.stringify(d);
        assert(s1 == s2, "2 callBack on 1 topic")
        x.pop();
        x.pop();
        x.push(f3);
        d = c.regester("string22", f3);
        s1 = JSON.stringify(x);
        s2 = JSON.stringify(d);
        // console.log(c)
        c.unrejester(f3);
        assert(s1 == s2, "2 callBack on 1 topic")
    }
    function checkUnrejester() {
        var c = eventCentral.createDispecher();
        var f1 = callBack1;
        var f2 = callBack2;
        var f3 = callBack3;
        var x = [];
        x.push(f1);
        c.regester("string", f1);
        c.regester("string", f2);
        c.regester("topictp", f3);
        var d = c.unrejester(f1);
        assert(d == f1, "unrejester if callBack exist")
        d = c.unrejester(f1);
        assert(d == undefined, "unrejester if callBack not found")
        d = c.unrejester(null);
        assert(d == undefined, "unrejester if callBack not func")

    }

    function checkSend() {
        var c = eventCentral.createDispecher();
        var message1 = { "string": "hello" };
    }
    return {
        checkRegesterTestCb: checkRegesterTestCb,
        checkSend: checkSend,
        checkRegesterTopic: checkRegesterTopic,
        checkUnrejester: checkUnrejester
    }
})();
test.checkRegesterTestCb();
test.checkRegesterTopic();
test.checkUnrejester();
//test.send();