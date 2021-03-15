function doGet(e) {
  return HtmlService.createTemplateFromFile('index').evaluate();
}

function storeEmail(data) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var editSheet = ss.getSheetByName('DB')
  var lastRow = editSheet.getLastRow();

  editSheet.getRange(lastRow + 1,1).setValue(data);

}

function doPost( request ) {
  var params =  JSON.stringify(request.parameter);
  params = JSON.parse(params);

  var result = storeEmail(params.Email)
}