function doGet ()
{
    return HtmlService.createTemplateFromFile("web").evaluate().setTitle("Agenda google apps Script");
}

function obtenerDatosHTML (nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos()
{
    let hoja = SpreadsheetApp.openById('1v6OlxQ2LkmknDPLPkFz8XlXhygkmsxQZ4fcSHaKn1g4').getActiveSheet();
    let datos = hoja.getDataRange().getValues();
    return datos;
}