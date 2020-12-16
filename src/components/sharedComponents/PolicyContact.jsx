import React from "react";
import { Link } from "react-router-dom";

const PolicyContact = (prosp) => {
  return (
    <div className="policy-contact">
      <Link to="/">Điều khoản</Link> | <Link to="/">Liên hệ với chúng tôi</Link>
    </div>
  );
};

export default PolicyContact;
