var tabButtons = document.querySelectorAll('#banner .service-bar .service-bar-item');
var tabPanels = document.querySelectorAll('#banner .service-form');

function showPanel(panelIndex){
    tabButtons.forEach(function(node){
        node.style.backgroundColor ="";
        node.style.color = "";
    })

    tabButtons[panelIndex].style.background = '#fafafa';
    tabButtons[panelIndex].style.color = "#1cbbb4";

    tabPanels.forEach(function(node){
        node.style.display = 'none';
    });

    tabPanels[panelIndex].style.display = 'block';
    tabPanels[panelIndex].style.backgroundColor = '#fafafa';

}

showPanel(0);