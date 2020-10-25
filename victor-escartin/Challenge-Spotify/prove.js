class PlayListComponent {

    constructor(playList) {
        
        this.playList = playList;
    }

    updateHtmlValue(element, property, value) {
        element.setAttribute(property,value)
    }
}