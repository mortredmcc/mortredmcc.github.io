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
});