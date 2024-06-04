import React from "react";

const Footer = () => {
  return (
    <footer className="bg-customGreen text-white py-10 sm: mt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-white-600 pb-8">
        <div className="border-t border-white-600 pt-4 md:pt-0 md:border-t-0 md:border-r md:pr-4">
          <h2 className="font-bold text-lg mb-4">Kontakt oss</h2>
          <p>
            Telefon:{" "}
            <a href="tel:62000880" className="underline">
              62 00 08 80
            </a>
          </p>
          <p>Åpningstider:</p>
          <p>Mandag–fredag kl. 08.00–15.30</p>
          <p>
            E-post:{" "}
            <a href="mailto:example@example.com" className="underline">
              Send e-post
            </a>
          </p>
          <p>
            <a href="#" className="underline">
              Send sikker digital post
            </a>
          </p>
        </div>
        <div className="border-t border-white-600 pt-4 md:pt-0 md:border-t-0 md:border-r md:pr-4">
          <h2 className="font-bold text-lg mb-4">Postadresse</h2>
          <p>Innlandet fylkeskommune</p>
          <p>Postboks 4404 Bedriftsenteret</p>
          <p>2325 Hamar</p>
          <p>
            <a href="#" className="underline">
              Se fakturaadresse
            </a>
          </p>
          <p>Organisasjonsnummer: 920 717 152</p>
        </div>
        <div className="border-t border-white-600 pt-4 md:pt-0 md:border-t-0 md:pr-4">
          <h2 className="font-bold text-lg mb-4">Her finner du oss</h2>
          <p>
            <strong>Fylkeshuset på Hamar</strong>
          </p>
          <p>Parkgata 64</p>
          <p>2317 Hamar</p>
          <p className="mt-4">
            <strong>Fylkeshuset på Lillehammer</strong>
          </p>
          <p>Kirkegata 76</p>
          <p>2609 Lillehammer</p>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-10 flex-col md:flex-row justify-between items-center hidden md:flex">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" className="underline">
            Personvern
          </a>
          <a href="#" className="underline">
            Informasjonskapsler (cookies)
          </a>
          <a href="#" className="underline">
            Tilgjengelighetserklæring
          </a>
        </div>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-white hover:text-gray-300 flex items-center space-x-2"
          >
            <i className="fab fa-facebook"></i>
            <span>Facebook</span>
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 flex items-center space-x-2"
          >
            <i className="fab fa-instagram"></i>
            <span>Instagram</span>
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 flex items-center space-x-2"
          >
            <i className="fab fa-youtube"></i>
            <span>YouTube</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
