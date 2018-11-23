import Home from "../component/Home";
import ButtonComponent from "../component/components/Button";

export default [
    {
        type: "menu-group",
        className: "",
        label: "Home",
        path: "/home",
        component: Home
    }, {
        type: "menu-group",
        className: "",
        label: "Component",
        path: "/button",
        childrens: [
            {
                type: "menu-item",
                className: "",
                label: "Button",
                path: "/button",
                component: ButtonComponent,
            }
        ]
    }
];