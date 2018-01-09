import React from "react";
import ReactDOM from "react-dom";
import "material-components-web/dist/material-components-web.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import { MDCTextField } from "@material/textfield";

class TextField extends React.Component {
  componentDidMount() {
    this.MDCComponent = new MDCTextField(this.textField);
  }

  render() {
    return (
      <label
        className="mdc-typography mdc-text-field mdc-text-field--outlined mdc-text-field--with-leading-icon"
        ref={textField => {
          this.textField = textField;
        }}
      >
        <i className="material-icons mdc-text-field__icon" tabIndex="0">
          event
        </i>
        <input type="text" id="tf-outlined" className="mdc-text-field__input" />
        <span className="mdc-text-field__label">Hint Text</span>
        <div className="mdc-text-field__outline">
          <svg>
            <path className="mdc-text-field__outline-path" />
          </svg>
        </div>
        <div className="mdc-text-field__idle-outline" />
      </label>
    );
  }
}

ReactDOM.render(<TextField />, document.getElementById("root"));
