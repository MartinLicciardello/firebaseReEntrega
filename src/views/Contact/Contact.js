import React from "react";

const styles = {
  containerContact: {
    padding: 20,
    textAlign: "center",
	color:"Blue",
  },
};

const Contact = () => {
  return (
    <div style={styles.containerContact}>
      <h1>Contact</h1>

      <h3>Fundador: Lee Byung-chul</h3>
      <h3>Sede:Samsung Town</h3>
      <h3>Sitio web: www.samsung.com</h3>
	  <h3>Telefono: 0303456</h3>
    </div>
  );
};

export default Contact;
