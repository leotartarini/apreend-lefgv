function doGet(e) {
    return HtmlService.createTemplateFromFile('index').evaluate();
  }
  
  function storePost(data) {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var editSheet = ss.getSheetByName('DB')
    var lastRow = editSheet.getLastRow();
  
    editSheet.getRange(lastRow + 1,1).setValue(data);
  
  }
  
  function doPost ( request ) {
    var params = JSON.stringify(request.parameter);
    params = JSON.parse(params);
  
    var result = storePost(params.Post)
    return HtmlService.createTemplateFromFile('index').evaluate();
  }
  
  function getPostsData () {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var editSheet = ss.getSheetByName('DB');
    var data = editSheet.getRange(2,1,editSheet.getLastRow() - 1).getValues();
    Logger.log(data);
    return data;
  }