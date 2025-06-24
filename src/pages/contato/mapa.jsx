
function MapaIframe() {
  return (
    <div style={{ width: "100%", height: "450px" }}>
      <iframe
        title="Mapa da Prefeitura de São José"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.4891264636203!2d-48.62941782377371!3d-27.609364076238855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952736107a35f633%3A0x79ec3b8f1fee6f9!2sPrefeitura%20Municipal%20de%20S%C3%A3o%20Jos%C3%A9!5e0!3m2!1spt-BR!2sbr!4v1750784370059!5m2!1spt-BR!2sbr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default MapaIframe;
