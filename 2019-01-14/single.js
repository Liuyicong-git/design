// const result = {};
// class SingleController {
//     constructor(){
//         if(new.target){
//             console.log('this is static Controller cannot new');
//             return ;
//         }   
//     }
//     static initSingle(fn , singleName){
//         return result[singleName] || ( result[singleName]=fn.apply(this)) ;
//     }
    
//     static getSingle(singleName){
//         return  singleName ? result[singleName] : result ;
//     }
// }
// export default SingleController;
'use strict';

// Object.defineProperty(exports, "__esModule", {
//     value: true
// });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var result = {};

var SingleController = function () {
    function SingleController() {
        _classCallCheck(this, SingleController);

        if (new.target) {
            console.log('this is static Controller cannot new');
            return;
        }
    }

    _createClass(SingleController, null, [{
        key: 'initSingle',
        value: function initSingle(fn, singleName) {
            return result[singleName] || (result[singleName] = fn.apply(this));
        }
    }, {
        key: 'getSingle',
        value: function getSingle(singleName) {
            return singleName ? result[singleName] : result;
        }
    }]);

    return SingleController;
}();

// exports.default = SingleController;