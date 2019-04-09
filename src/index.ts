import { VApp, Renderer, cssClass, Props } from "@kloudsoftware/eisen"
import { ImgComponent } from './components/ImgComponent'
import { images } from './content'
import { LightBox } from './plugins/LightBox'

const app = new VApp("target", new Renderer());
app.init();
const lightBox = new LightBox();
app.use("lightBox", lightBox);

const div = app.k("div", { attrs: [cssClass("contentDiv")] }, [
    app.k("h1", { value: "Photos from Lars, taken on earth" }),
]);

app.rootNode.appendChild(div);

images.forEach(img => {
    const props = new Props(app);
    props.setProp("path", img.name)
    props.setProp("subtext", img.subtext);

    app.mountComponent(new ImgComponent(), div, props);
})


