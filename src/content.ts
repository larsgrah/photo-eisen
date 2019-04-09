export class Image {
    subtext: string;
    name: string;

    constructor(name: string, subtext: string) {
        this.name = name;
        this.subtext = subtext;
    }
}

export const images = [
    new Image("panoedited.jpg", "Panorama, taken in Gaschurn, Austria"),
    new Image("wolke.jpg", "Cloud on mountain, taken in Val Cenis, France"),
    new Image("board.jpg", "Board, taken in Emden, Germany"),
]
