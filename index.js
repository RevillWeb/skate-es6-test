/**
 * Created by Leon Revill on 5/12/2017.
 * Blog: blog.revillweb.com
 * Twitter: @RevillWeb
 * GitHub: github.com/RevillWeb
 */
import * as skate from "skatejs/src/index";

class MyComponent extends skate.Component {

    static get props() {
        return {
            name: skate.prop.string({ attribute: true, default: "World" })
        };
    }

    renderCallback(props) {

        return skate.h("h1", `Hello ${props.name}!`);
    }
}

customElements.define("my-component", MyComponent);