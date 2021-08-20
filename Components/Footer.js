import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-4 px-36 py-14 my-6 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Digital booking works</p>
        <p>News & Press</p>
        <p>Investors</p>
        <p>Advertise</p>
        <p>Media Contacts</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>Digital Villa and co.</p>
        <p>Presents</p>
        <p>Traders</p>
        <p>Join Now</p>
        <p>Partners</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Opensource Site</p>
        <p>Accessibility</p>
        <p>Privacy Policy</p>
        <p>Blog</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Centre</p>
        <p>Cancellation options</p>
        <p>Nearby Response</p>
        <p>Safety Network</p>
        <p>Reports</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">CONTACT US</h5>
      </div>
    </div>
  );
};

export default Footer;
