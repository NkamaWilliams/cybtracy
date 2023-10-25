import "@/Styles/Team.css";
import { BiGift } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { IoEarth } from "react-icons/io5";

export default function GetInvolvedSection() {
  return (
    <section className="get-involved-section">
      <div className="get-involved-intro">
        <h1 className="header text-fdfdfd">Get Involved</h1>
        <p className="header-text text-fdfdfd">
          We are better with your support. Become a part of the family!
        </p>
        <button className="secondary-btn bg-green">Contact Us</button>
      </div>
      <div className="donate">
        <div className="don">
          <div className="svg-con">
            <BiGift />
          </div>
          <div className="svg-text">Donation</div>
        </div>
        <div className="don">
          <div className="svg-con">
            <IoEarth />
          </div>
          <div className="svg-text">Partnership</div>
        </div>
        <div className="don">
          <div className="svg-con">
            <IoIosPeople />
          </div>
          <div className="svg-text">Volunteer</div>
        </div>
      </div>
    </section>
  );
}
