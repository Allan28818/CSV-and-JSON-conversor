function CSVToArray ( inputToJson, DelimiterOfCsv ) {

    DelimiterOfCsv = (DelimiterOfCsv || ",");

    
    var RegexBase = new RegExp(
        (
            
            "(\\" + DelimiterOfCsv + "|\\r?\\n|\\r|^)" +

            
            "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +

            
            "([^\"\\" + DelimiterOfCsv + "\\r\\n]*))"
        ),
        "gi"
        );

    var resultsOfJsonConversion = [[]];
    var resultsOfTheComparation = null;

    while (resultsOfTheComparation = RegexBase.exec( inputToJson )){

        var matchedDelimiterOfCsv = resultsOfTheComparation[ 1 ];

        JudgeTheValuesToAddAnArray
        (matchedDelimiterOfCsv, 
        DelimiterOfCsv, 
        resultsOfJsonConversion);

        var strMatchedValue = 
        ManipulateTheRegex(resultsOfTheComparation);

        resultsOfJsonConversion[ resultsOfJsonConversion
          .length - 1 ]
        .push( strMatchedValue );
    }
    return( resultsOfJsonConversion );
}

  function JudgeTheValuesToAddAnArray 
  (matchedDelimiterOfCsv, DelimiterOfCsv,resultsOfJsonConversion) 
  {
    if (matchedDelimiterOfCsv.length &&
      (matchedDelimiterOfCsv !== DelimiterOfCsv))
    {
        resultsOfJsonConversion.push( [] );
    }
  }

  function ManipulateTheRegex (resultsOfTheComparation) {
    
    if (resultsOfTheComparation[ 2 ])
    {
      var strMatchedValue = resultsOfTheComparation[ 2 ]
      .replace(new RegExp( "\"\"", "g" ), "\"");

      return strMatchedValue;
    } 
    else 
    {
      var strMatchedValue = resultsOfTheComparation[ 3 ];
      return strMatchedValue;
    }
  }

export default CSVToArray; 