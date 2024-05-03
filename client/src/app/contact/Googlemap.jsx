"use client";

const Googlemap = () => {
  return (
    <div style={{ marginTop: "30px" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d931.1810601741774!2d105.86660336949456!3d21.00368825078859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac0708304037%3A0x95fcdf2147a1cc38!2zVGhhbmggTMawxqFuZywgSGFpIELDoCBUcsawbmcsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1714185516318!5m2!1svi!2s"
        width="100%"
        height="350"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
export default Googlemap;
