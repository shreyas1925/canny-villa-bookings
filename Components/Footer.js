import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-4 md:px-36 px-12 py-14 bg-gray-100 text-gray-600">
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
        <h5 className="font-bold mt-3 mb-4">CONTACT US</h5>
        <div className="flex justify-between sm:m-4 cursor-pointer">
          <a href="https://github.com/shreyas1925" target="_blank">
            <GitHubIcon />
          </a>
          <Link href="/">
            <InstagramIcon />
          </Link>
          <Link href="/">
            <LinkedInIcon />
          </Link>
          <Link href="/">
            <TwitterIcon />
          </Link>
        </div>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-semibold md:m-12 w-62 mt-3 md:w-screen">
          Terms & Conditions | All Rights Reserved | 2021 Digital Villa and co.
        </h5>
      </div>
    </div>
  );
};

export default Footer;
