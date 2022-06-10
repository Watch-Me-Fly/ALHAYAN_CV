(function () {

    var userLanguage = window.navigator.userLanguage
        || window.navigator.language;

    function defaultLang() {
        $('*[lang=en]').show();
        $('*[lang=fr]').hide();
        $('*[lang=ar]').hide();
    }
    defaultLang();

    $('#en, #FrEn, #ArEn').click(
        function () {
            $('*[lang=en]').show();
            $('*[lang=fr]').hide();
            $('*[lang=ar]').hide();
        }
    );

    $('#fr, #frfr, #ArFr').click(
        function () {
            $('*[lang=fr]').show();
            $('*[lang=en]').hide();
            $('*[lang=ar]').hide();
        }
    );

    $('#ar, #FrAr, #ArAr').click(
        function () {
            $('*[lang=ar]').show();
            $('*[lang=en]').hide();
            $('*[lang=fr]').hide();
        }
    );
})();