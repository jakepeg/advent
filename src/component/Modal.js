import React from "react";
import PropTypes from "prop-types";
import "./modal.css";
import data from "../data.json";

function Modal(props) {
  const onClose = e => {
    props.onClose && props.onClose(e);
  };

  if (!props.show) {
    return null;
  }

  let dayValue = parseInt(props.activeDoor);

  return (
    <div className="modal-wrap" id="modal">
      <div className="modal" id="modal">
        <div className="content">
          {props.children} <h1>{props.text}</h1>
          <p> {data ? data[dayValue].text : ""}</p>{" "}
        </div>
        <div className="actions">
          <button className="toggle-button" onClick={onClose}>
            x
          </button>
        </div>
      </div>
    </div>
  );
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};

export default Modal;
