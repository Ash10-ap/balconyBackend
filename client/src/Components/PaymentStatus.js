import React, { useEffect, useState } from "react";

const PaymentStatus = ({ match }) => {
  const [values, setValues] = useState({
    amount: "",
    error: "",
  });

  const { amount, error } = values;

  const getOrder = async () => {
    return await fetch(`http://localhost:5500/api/createOrder`, {
      method: "GET",
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));
  };

  const grabStatus = async (paymentId) => {
    try {
      const response = await fetch(
        `http://localhost:5500/api/payments/${paymentId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return await response.json();
    } catch (err) {
      return console.log(err);
    }
  };

  const getPaymentStatus = (paymentId) => {
    grabStatus(paymentId).then((respsonse) => {
      if (respsonse.error) {
        setValues({ ...values, error: respsonse.error, amount: "" });
      } else {
        setValues({ ...values, error: "", amount: respsonse.amount });
      }
    });
  };
  useEffect(() => {
    getPaymentStatus(match.params.paymentId);
  }, []);
  return (
    <div>
      {error && <h1 style={{ color: "red" }}>{error}</h1>}
      {amount > 0 && (
        <h1 style={{ color: "green" }}>
          Your order of rs {amount / 100} is successfull
        </h1>
      )}
      {!error && !amount && <h1>Loading...</h1>}
    </div>
  );
};

export default PaymentStatus;
