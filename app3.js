/**
 * Created by red6 on 3/22/2017.
 */


function ShowAttributeValue(){
    alert(document.getElementById('splink').getAttribute('href'));
}

function ChangeAttributeValue(){
    document.getElementById('splink').setAttribute('href', 'http://www.google.com/');
}

function ShowElementText(){
    var sitepoint_link = document.getElementById('splink');

    alert('Node text is: ' + sitepoint_link.childNodes[0].nodeValue); //  textContent
    alert('Node type is: ' + sitepoint_link.childNodes[0].nodeName);

    alert('I\'m going to change the text');
    sitepoint_link.childNodes[0].nodeValue = 'Google';
    alert('Text was changed... click OK and check!');

}