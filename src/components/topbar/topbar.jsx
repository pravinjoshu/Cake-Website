// import React, { useState } from "react";
// import "./topbar.css";

// // Import icons from react-icons (NO ERROR)
// import {
//   FaSearch,
//   FaShoppingCart,
//   FaUser,
//   FaBars,
//   FaTimes,
//   FaGift,
//   FaHeart,
//   FaQuestionCircle,
//   FaInfoCircle,
//   FaPhone,
//   FaWhatsapp,
//   FaAward
// } from "react-icons/fa";

// export default function FlowerAuraTopBar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isMoreOpen, setIsMoreOpen] = useState(false);

//   return (
//     <div className="topbar-container">

//       {/* Topbar */}
//       <div className="topbar">
//         {/* Logo */}
//         <div className="logo">
//           <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="mobile-menu-btn">
//             {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
//           </button>

//           FlowerAura
//         </div>

//         {/* Search */}
//         <div className="search-container">
//           <input className="search-input" placeholder="Search for..." />
//           <FaSearch className="search-icon" />
//         </div>

//         {/* Right Section */}
//         <div className="right-actions">
//           <a href="#" className="action-link">
//             <FaGift /> Track Order
//           </a>

//           {/* Cart */}
//           <div className="action-link" style={{ position: "relative" }}>
//             <FaShoppingCart />
//             <span>Cart</span>
//             <span className="cart-count">0</span>
//           </div>

//           {/* Currency */}
//           <select className="action-link" style={{ border: "1px solid #ccc", padding: "4px", borderRadius: "6px" }}>
//             <option>INR</option>
//             <option>USD</option>
//           </select>

//           {/* Sign In */}
//           <div className="action-link">
//             <FaUser /> Sign In
//           </div>

//           {/* More Menu */}
//           <div className="more-menu">
//             <div className="action-link" onClick={() => setIsMoreOpen(!isMoreOpen)}>
//               <FaBars /> More
//             </div>

//             {isMoreOpen && (
//               <div className="more-dropdown">
//                 <a href="#"><FaGift /> Corporate Gifts</a>
//                 <a href="#"><FaHeart /> My Favourites</a>
//                 <a href="#"><FaAward /> Franchise</a>
//                 <a href="#"><FaQuestionCircle /> FAQ</a>
//                 <a href="#"><FaInfoCircle /> About Us</a>
//                 <a href="#"><FaGift /> Sell With Us</a>
//                 <a href="#"><FaPhone /> Contact Us</a>
//                 <a href="#"><FaWhatsapp /> WhatsApp</a>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="mobile-menu">
//           <div className="mobile-item"><FaGift /> Track Order</div>
//           <div className="mobile-item"><FaGift /> Corporate Gifts</div>
//           <div className="mobile-item"><FaHeart /> My Favourites</div>
//           <div className="mobile-item"><FaAward /> Refer & Earn</div>
//           <div className="mobile-item"><FaAward /> Franchise</div>
//           <div className="mobile-item"><FaQuestionCircle /> FAQ</div>
//           <div className="mobile-item"><FaInfoCircle /> About Us</div>
//           <div className="mobile-item"><FaPhone /> Contact Us</div>
//           <div className="mobile-item"><FaWhatsapp /> WhatsApp</div>
//         </div>
//       )}
//     </div>
//   );
// }


import React from 'react'

const topbar = () => {
  return (
    <div>
      j
    </div>
  )
}

export default topbar
