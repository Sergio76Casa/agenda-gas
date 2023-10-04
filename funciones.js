function doGet ()
{
    return HtmlService.createTemplateFromFile("web").evaluate().setTitle("Agenda google apps Script");
}

function obtenerDatosHTML (nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}