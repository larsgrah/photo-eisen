import { Component, VApp, ComponentBuildFunc, Props, VNode, src, cssClass } from "@kloudsoftware/eisen"
import { LightBox } from '../plugins/LightBox'

export class ImgComponent extends Component {
    build(app: VApp): ComponentBuildFunc {
        return (root: VNode, props: Props) => {
            const imgPath: string = props.getProp("path");
            const subText: string = props.getProp("subtext");
            root.addClass("contentDiv")

            const img = app.k("img", { attrs: [src(imgPath), cssClass("imgStyle")] });
            const subtext = app.k("p", { value: subText, attrs: [cssClass("subtext")] });

            root.appendChild(img);
            root.appendChild(subtext);

            return {
                mounted: () => {
                    const lightBox = app.get<LightBox>("lightBox");
                    lightBox.addImage(img);
                }
            };
        }
    }
}
