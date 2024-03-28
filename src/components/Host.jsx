import React from "react";
import PropTypes from "prop-types";

function Host({ currentSlide }) {
  if (!currentSlide || typeof currentSlide !== "object") {
    return null;
  }

  const { host } = currentSlide;

  if (!host) {
    return null;
  }

  return (
    <section className="Host">
      <h3 className="host-title">{host.name}</h3>
      <img className="host-img" src={host.picture} alt={host.name} />
    </section>
  );
}

Host.propTypes = {
  currentSlide: PropTypes.shape({
    host: PropTypes.shape({
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Host;
