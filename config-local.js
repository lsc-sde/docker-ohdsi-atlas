define([], function () {
    var configLocal = {};

    // clearing local storage otherwise source cache will obscure the override settings
    localStorage.clear();

    var getUrl = window.location;
    var baseUrl = getUrl.protocol + "//" + getUrl.hostname + "/WebAPI/";

    // WebAPI
    configLocal.api = {
        name: "OHDSI",
        url: baseUrl,
    };
    console.info("baseURL is " + baseUrl)

    configLocal.cohortComparisonResultsEnabled = false;
    configLocal.userAuthenticationEnabled = true;
    configLocal.plpResultsEnabled = false;

    configLocal.authProviders = [
        {
        name: "OpenID Connect",
        url: "user/login/openid",
        ajax: false,
        icon: "fa fa-openid",
        },
    ];

    return configLocal;
    });