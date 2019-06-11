export class Image {
    subtext: string;
    name: string;

    constructor(name: string, subtext: string) {
        this.name = name;
        this.subtext = subtext;
    }
}

export const images = [
    new Image("raetsel_1.jpg", "Rätselserie"),
    new Image("raetsel_2.jpg", "Rätselserie"),
    new Image("raetsel_3.jpg", "Rätselserie"),
    new Image("raetsel_4.jpg", "Rätselserie"),
    new Image("raetsel_5.jpg", "Rätselserie"),
    new Image("raetsel_6.jpg", "Rätselserie"),
    new Image("architektur_grahmann.jpg", "Elbphilharmonie"),
    new Image("weich_hartlicht_grahmann.jpg", "Weiches Licht"),
    new Image("weich_hartlicht_grahmann_2.jpg", "Hartes Licht"),
    new Image("produkt_grahmann.jpg", "Fossil Watch, Produktfoto"),
    new Image("monochrom_grahmann.jpg", "Rickmers Glocke, Monochrom"),
    new Image("standort_oben_grahmann.jpg", "Standort Oben"),
    new Image("standort_unten_grahmann.jpg", "Standort Unten"),
    new Image("muster_grahmann.jpg", "Steinmuster"),
    new Image("symmetrie_grahmann.jpg", "Zentralperspektive, Symmetrie"),
    new Image("menschen_grahmann.jpg", "Menschen bei Bühnenaufbau"),
    new Image("landschaft_grahmann.jpg", "Emden bei Abend, Landschaft mit Vordergrund"),
    new Image("fotokunst_grahmann.jpg", "Hamburger Hafen, Verfremdet"),
    new Image("zwei_Gesichter_Grahmann.jpg", "Zwei Gesichter"),
    new Image("zwei_Gesichter_Grahmann_2.jpg", "Zwei Gesichter"),
    new Image("schärfentiefe_grahmann.jpg", "Schärfentiefe"),
    new Image("schärfentiefe_grahmann_2.jpg", "Schärfentiefe"),
    new Image("wahlbild1_grahmann.jpg", "Kür, Tau auf Schiff"),
]
