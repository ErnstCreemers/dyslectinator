var dyslectinator = new(function () {

    var _defaultSettings = {
        selector: ".shuffle"
    };

    this.init = function (settings) {
        //Merge the defaultsettings with settings
        _mergeObjects(_defaultSettings, settings || {});
        s = _defaultSettings;

        //on buttonclick
        _buttonclickListener();
    };

    var _mergeObjects = function (obj1, obj2) {
        for (var attrname in obj1) {
            if (obj2.hasOwnProperty(attrname)) {
                obj1[attrname] = obj2[attrname];
            }
        }
    };

    var _buttonclickListener = function () {
        document.getElementById("button4").addEventListener("click", function () {
            _iterateOverSelector();
        });
    };

    var _iterateOverSelector = function () {
        var fullwords = document.querySelectorAll(s.selector);
        for (var i = 0; i < fullwords.length; i++) {
            _shuffleWord(fullwords.item(i));
        }
    }

    var _shuffleWord = function (word) {
        var fullWord = word.innerHTML;
        console.log(fullWord);

        //get first letter
        firstLetter = fullWord.charAt(0);
        console.log("first letter: " + firstLetter);

        //get last letter
        var fullWordLength = fullWord.length;
        var lastLetter = fullWord.charAt(fullWordLength - 1);
        console.log("last letter:" + lastLetter);

        //get the inbetween letters
        var inBetween = fullWord.slice(1, -1);
        console.log("inbetween:" + inBetween);

        //shuffle the inbetween
        var shuffledInBetween = inBetween._shuffle();
        console.log("shuffled inbetween:" + shuffledInBetween);

        //paste everything together
        var shuffledWord = firstLetter + shuffledInBetween + lastLetter;
        console.log("shuffled word:" + shuffledWord);

        word.innerHTML = shuffledWord;
    };

    String.prototype._shuffle = function () {
        var a = this.split(""),
            n = a.length;

        for (var i = n - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
        }
        return a.join("");
    }
})();