// Client-side code
/* jshint browser: true, jquery: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, undef: true, unused: true, strict: true, trailing: true */
/* global _:false */
// Server-side code
/* jshint node: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, undef: true, unused: true, strict: true, trailing: true */

var main = function() {
    "use strict";
//Exercise1 - Average
var exercise1 = function(nums) {
    var sumSoFar = 0;
    nums.forEach(function(value) {
        sumSoFar = sumSoFar + value;
    });
    return "Avergae: " + (sumSoFar / nums.length).toString();
};

//Exercise2 - MaxValue
var exercise2 = function(nums) {
    var maxValue = nums[0];
    nums.forEach(function(value) {
        if (value > maxValue) {
            maxValue = value;
        }
    });
    return "Maximum: " + maxValue.toString();
};

//Exercise3- At least one even number
var exercise3 = function(nums) {
    var isEven = false;
    nums.forEach(function(value) {
        if (value % 2 === 0) {
            isEven = true;
            return;
        }
    });
    return "There is at least one even  number: " + isEven;
};

//Exercise4- All even numbers
var exercise4 = function(nums) {
    var isEven = true;
    nums.forEach(function(value) {
        if (value % 2 !== 0) {
            isEven = false;
            return;
        }
    });
    return "All the numbers are even: " + isEven;
};

//Exercise5- arrayContains
var arrayContains = function(arr, string) {
    var doesContain = false;
    arr.forEach(function(value) {
        if (value.localeCompare(string) === 0) {
            doesContain = true;
            return;
        }
    });
    return "The array contains at least one \"" + string + "\": " + doesContain;
};

//Exercise6- arrayContainsTwo
var arrayContainsTwo = function(arr, string) {
    var doesContain = false;
    var count = 0;
    arr.forEach(function(value) {
        if (value.localeCompare(string) === 0) {
            count++;
        }
    });
    if (count >= 2) {
        doesContain = true;
    }
    return "The array contains at least two \"" + string + "\": " + doesContain;
};

//Exercise6- arrayContainsThree
var arrayContainsThree = function(arr, string) {
    var doesContain = false;
    var count = 0;
    arr.forEach(function(value) {
        if (value.localeCompare(string) === 0) {
            count++;
        }
    });
    if (count >= 3) {
        doesContain = true;
    }
    return "The array contains at least three \"" + string + "\": " + doesContain;
};

//Exercise6- arrayContainsNTimes
var arrayContainsNTimes = function(arr, string, n) {
    var doesContain = false;
    var count = 0;
    arr.forEach(function(value) {
        if (value.localeCompare(string) === 0) {
            count++;
        }
    });
    if (count >= n) {
        doesContain = true;
    }
    return "The array contains at least " + n + " \"" + string + "\": " + doesContain;
};

//------------------ underscore.js --------------------------
// Exercise1
var _js1 = function(nums) {
    var sum = _.reduce(nums, function(memo, num) {
        return memo + num;
    }, 0);
    return "Avergae: " + (sum / _.size(nums)).toString();
};

// Exercise2
var _js2 = function(nums) {
    var maxValue = _.max(nums);
    return "Maximum: " + maxValue.toString();
};

// Exercise3
var _js3 = function(nums) {
    var isEven = false;

    var count = _.countBy(nums, function(num) {
        return num % 2 === 0 ? "even" : "odd";
    });

    if (count.even >= 1) {
        isEven = true;
    }

    return "There is at least one even  number: " + isEven;
};

// Exercise4
var _js4 = function(nums) {
    var size = _.size(nums),
        isEven = false;

    var count = _.countBy(nums, function(num) {
        return num % 2 === 0 ? "even" : "odd";
    });

    if (count.even === size) {
        isEven = true;
    }

    return "All the numbers are even: " + isEven;
};

// Exercise5
var _js5 = function(arr, string) {
    var doesContain = false;

    var found = _.filter(arr, function(word) {
        return _.isEqual(word, string) === true;
    });

    if (_.size(found) > 0) {
        doesContain = true;
    }

    return "The array contains at least one \"" + string + "\": " + doesContain;
};

// Exercise6 - Two
var _js6Two = function(arr, string) {
    var doesContain = false;

    var found = _.filter(arr, function(word) {
        return _.isEqual(word, string) === true;
    });

    if (_.size(found) >= 2) {
        doesContain = true;
    }

    return "The array contains at least two \"" + string + "\": " + doesContain;
};

// Exercise6 - Three
var _js6Three = function(arr, string) {
    var doesContain = false;

    var found = _.filter(arr, function(word) {
        return _.isEqual(word, string) === true;
    });

    if (_.size(found) >= 3) {
        doesContain = true;
    }

    return "The array contains at least three \"" + string + "\": " + doesContain;
};

// Exercise6 - N
var _js6N = function(arr, string, n) {
    var doesContain = false;

    var found = _.filter(arr, function(word) {
        return _.isEqual(word, string) === true;
    });

    if (_.size(found) >= n) {
        doesContain = true;
    }

    return "The array contains at least " + n + " \"" + string + "\": " + doesContain;
};


// Main function


    var exercises1through4 = function() {
        var exit = false;

        if ($(".numberArray input").val() !== "") {

            var nums = $(".numberArray input").val().split(" ").map(Number);
            nums.forEach(function(value) {
                if (isNaN(value)) {
                    window.alert("please enter numbers only");
                    exit = true;
                    return;
                }
            });

            if (exit === true) {
                return;
            } else {
                var funcArr = [exercise1, exercise2, exercise3, exercise4];

                funcArr.forEach(function(value) {
                    var $answers = $("<div>" + value(nums) + "</div>");
                    $answers.hide();
                    $(".numberArray").append($answers);
                    $answers.slideDown(2000);
                });

                var $underscore = $("<p>").text("Here are the answers using underscore.js:");
                $underscore.hide();
                $(".numberArray").append($underscore);
                $underscore.slideDown(2000);

                var _funcArr = [_js1, _js2, _js3, _js4];

                _funcArr.forEach(function(value) {
                    var $answers = $("<div>" + value(nums) + "</div>");
                    $answers.hide();
                    $(".numberArray").append($answers);
                    $answers.slideDown(2000);
                });

            }

        }
    };

    var exercises5through6 = function() {
        var arr = $(".stringArray #array").val().split(" ");
        var word = $(".stringArray #searchWord").val();
        var n = $(".stringArray #count").val();

        if ($(".stringArray input").val() !== "") {

            var funcArr = [arrayContains, arrayContainsTwo, arrayContainsThree];

            funcArr.forEach(function(value) {
                var $answers = $("<div>" + value(arr, word) + "</div>");
                $answers.hide();
                $(".stringArray").append($answers);
                $answers.slideDown(2000);
            });

            var $answers = $("<div>" + arrayContainsNTimes(arr, word, n) + "</div>");
            $answers.hide();
            $(".stringArray").append($answers);
            $answers.slideDown(2000);

            var $underscore = $("<p>").text("Here are the answers using underscore.js:");
            $underscore.hide();
            $(".stringArray").append($underscore);
            $underscore.slideDown(2000);

            var _funcArr = [_js5, _js6Two, _js6Three];

            _funcArr.forEach(function(value) {
                var $answers = $("<div>" + value(arr, word) + "</div>");
                $answers.hide();
                $(".stringArray").append($answers);
                $answers.slideDown(2000);
            });

            $answers = $("<div>" + _js6N(arr, word, n) + "</div>");
            $answers.hide();
            $(".stringArray").append($answers);
            $answers.slideDown(2000);
        }
    };

    $(".numberArray button").on("click", function(event) {
        event.preventDefault();
        exercises1through4();
    });

    $(".stringArray button").on("click", function(event) {
        event.preventDefault();
        exercises5through6();
    });

};

$(document).ready(main);
