import React from "react";

function PaymentPage() {
  return (
    <div>
      <h2>Payment Page</h2>
      {/* Form for entering payment details */}
      <form>
        <label>
          Card Number:
          <input type="text" />
        </label>
        <label>
          Expiry Date:
          <input type="text" />
        </label>
        <label>
          CVV:
          <input type="text" />
        </label>
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
}

export default PaymentPage;
