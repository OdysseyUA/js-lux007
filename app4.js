/**
 * Created by red6 on 3/22/2017.
 */


function ChangeDOMStructure() {
    var para = document.getElementById('codepara');
    var link = document.getElementById('yalink');


    para.appendChild(link);
}


function AddToDOMStructure() {

    var para = document.getElementById('codepara');
    var newParagElement = document.createElement('p');

    var newLinkElement = document.createElement('a');
    newLinkElement.setAttribute('href', 'http://www.linux.org/');
    newLinkElement.setAttribute('id', 'linux');
    //newLinkElement.setIdAttribute('linux', true);
    newLinkElement.textContent = 'The Linux operating system';

    newParagElement.appendChild(newLinkElement);
    para.appendChild(newParagElement);

}

function MoveBeforeYalink() {

    var para = document.getElementById('yalink');


    para.insertBefore(element, anchorElement)

}