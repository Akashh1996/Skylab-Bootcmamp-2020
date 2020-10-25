class PlaylistComponent {
    constructor(playlist) {
        this.playlist = playlist;
    }

    updateHtmlValue(element, property, value) {
        element.setAttribute(property, value)
    }
}

