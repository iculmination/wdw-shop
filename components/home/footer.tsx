import Image from "next/image";

const Footer = () => {
  return (
    <footer className="pt-20 pb-12 mt-60">
      <div className="w-4/5 border-b-[1.2px] pb-8 border-b-slate-500 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="">
          <h2 className="text-[25px] uppercase font-semibold text-black mb-4">
            WDW Shop
          </h2>
          <p className="text-sm text-black opacity-60 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab quas
            aliquid error, sunt vero quisquam harum animi sed eius? Cumque.
          </p>
          <p className="text-base mt-6 text-black opaccity-80">
            (+000) 1234 5678 90 - info@example.com
          </p>
        </div>

        <div className="lg:mx-auto">
          <h4 className="footer-title">Information</h4>
          <p className="footer-link">Aboot Us</p>
          <p className="footer-link">Privacy Policy</p>
          <p className="footer-link">Return Policy</p>
          <p className="footer-link">Dropshipping</p>
          <p className="footer-link">Shipping Policy</p>
        </div>

        <div className="lg:mx-auto">
          <h4 className="footer-title">Account</h4>
          <p className="footer-link">Dashboard</p>
          <p className="footer-link">My Orders</p>
          <p className="footer-link">Account Details</p>
          <p className="footer-link">Track Orders</p>
        </div>

        <div className="lg:mx-auto">
          <h4 className="footer-title">Shop</h4>
          <p className="footer-link">Affiliate</p>
          <p className="footer-link">Best Sellers</p>
          <p className="footer-link">Latest Products</p>
          <p className="footer-link">Sale Products</p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 justify-between w-4/5 mx-auto">
        <p className="text-sm text-black opacity-60">
          © Copyright{" "}
          <a
            href="https://t.me/i_culmination"
            className="text-yellow-600 hover:text-black duration-300"
          >
            culmination
          </a>{" "}
          2024
        </p>
        <Image
          src="/images/pay.svg"
          alt="pay"
          width={230}
          height={230}
          className="object-contain sm:ml-auto image"
        />
      </div>
    </footer>
  );
};

export default Footer;
