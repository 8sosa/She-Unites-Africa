import React from 'react';

export const Partners = () => {
  const partners = [
    { alt: "Girl Up Rwanda" },
    { alt: "Ladies with Stories" },
    { alt: "Utunyange Initiative" },
    { alt: "Miriam Ujunwa Girls Foundation" },
    { alt: "Sus Pads" },
    { alt: "Friend Pal" }
  ];

  const importAll = (requireContext) => {
    return requireContext.keys().map(requireContext);
  };

  const partnerImages = importAll(require.context('../Images/partners', false, /\.(png|jpe?g|svg|jpg|PNG|JPG)$/));

  return (
    <div className='partners'>
      {partners.map((partner, index) => (
        <img
          src={partnerImages[index]}
          alt={partner.alt}
          className='partnerLogo'
          key={index}
        />
      ))}
    </div>
  );
};
