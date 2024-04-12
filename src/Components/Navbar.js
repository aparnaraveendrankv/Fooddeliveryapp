import React, { useState } from "react";
import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, SummarizeRounded } from "@mui/icons-material";
import MenuContainer from "./MenuContainer";
import "./Navbar.css"; // Import CSS file for Navbar styling

function Navbar() {
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to manage popup visibility

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="leftMenu">
      <ul id="menu">
        {/* Home */}
        <li>
          <MenuContainer
            link="/"
            icon={<HomeRounded />}
            label="Home"
            isHome
          />
        </li>
        {/* About */}
        <li>
          <MenuContainer link="#" icon={<Chat />} label="About" />
        </li>
        {/* Pay Us */}
        <li onClick={togglePopup}>
          <MenuContainer
            icon={<AccountBalanceWalletRounded />}
            label="Pay Us"
          />
        </li>
        {/* Favorite */}
        <li>
          <MenuContainer link="#" icon={<Favorite />} label="Favorite" />
        </li>
        {/* Settings */}
        <li>
          <MenuContainer link="#" icon={<SummarizeRounded />} label="Settings" />
        </li>
        {/* Indicator */}
        <div className="indicator"></div>
      </ul>

      {/* QR Code Popup */}
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            {/* QR Code Image */}
            <img
              src="https://www.qrstuff.com/images/default_qrcode.png"
              alt="QR Code"
              className="qr-image"
            />
            {/* Paragraph */}
            <p>Scan this QR code to make a payment.</p>
            {/* Close Button */}
            <button onClick={togglePopup} className="close-button">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
