var TestService = (function () {
    var testMode = 1;
    var MasterQuestion;
    MasterQuestion = [];
    var requestObj = new XMLHttpRequest();    
    requestObj.open("GET", "MasterQuestions.txt", false);
    requestObj.send();
    MasterQuestion = JSON.parse(requestObj.responseText);

    function getAllSectionNamesFunc() {
        var sectionNames = [];
        for (i = 0; i < MasterQuestion.length; i++) {
            var sectionFound = false;
            for (j = 0; j < sectionNames.length; j++) {
                if (MasterQuestion[i].Section == sectionNames[j]) {
                    sectionFound = true;
                }
            }
            if (!sectionFound) {
                sectionNames.push(MasterQuestion[i].Section);
            }
        }
        return sectionNames;
    }
    //Setting Mode
    function setTestModeFunc(mode) {
        if (mode > 0 && mode < 3)//Limitting the test mode to only two modes "Test Mode" and "Review Mode"
            testMode = mode;            
    }

    function getTestModeFunc() {
        return testMode;
    }
    return {
        getAllSectionNames: getAllSectionNamesFunc,
        setTestMode: setTestModeFunc,
        getTestMode: getTestModeFunc
    };
})();