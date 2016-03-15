var DorgkumService = angular.module('DorgkumService', []);

DorgkumService.factory('Lang', function () {

    var data = {
        lang: ''
    };

    return {
        getLang: function () {
            return data.lang;
        },
        setLang: function (lang) {
            data.lang = lang;
        }
    };
})
.factory('RandomColor', function(){
    var letters = '0123456789ABCDEF'.split('');
    
    return {
        getColor: function () {
            var color = '#';
            for (var i = 0; i < 6; i++ ) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return  color;
        }
    };
});