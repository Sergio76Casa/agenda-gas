const HOJA = SpreadsheetApp.openById('1v6OlxQ2LkmknDPLPkFz8XlXhygkmsxQZ4fcSHaKn1g4').getActiveSheet();

function doGet (datos)
{
    return HtmlService.createTemplateFromFile("web").evaluate().setTitle("Agenda google apps Script");
}

function doPost (datos)
{    
    return HtmlService.createTemplateFromFile("web").evaluate().setTitle("Agenda google apps Script");    
}

function obtenerDatosHTML (nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos()
{  
    return HOJA.getDataRange().getValues();
}

function insertarContactos (nombre, correo)
{
    HOJA.appendRow([nombre,correo]);
}