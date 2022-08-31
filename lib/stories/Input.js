var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import useForm from "../components/use-form/useForm";
var Input = function () {
    var _a = useForm(), onSubmit = _a.onSubmit, register = _a.register;
    var handleOnSubmit = function (event) {
        var data = onSubmit(event);
    };
    return (React.createElement("form", { onSubmit: handleOnSubmit },
        React.createElement("input", __assign({ type: "text" }, register("test1", "default 1"))),
        React.createElement("button", { type: "submit" }, "Submit")));
};
export default Input;
//# sourceMappingURL=Input.js.map