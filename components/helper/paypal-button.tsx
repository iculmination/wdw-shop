import {
  FUNDING,
  PayPalButtons,
  PayPalScriptProvider,
} from "@paypal/react-paypal-js";

interface PayPalButtonProps {
  amount: string;
  onSuccess: (details: any) => void;
}

const PayPalButton = ({ amount, onSuccess }: PayPalButtonProps) => {
  return (
    <PayPalScriptProvider
      options={{
        clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
        currency: "USD",
      }}
    >
      <PayPalButtons
        fundingSource={FUNDING.PAYPAL}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                // @ts-expect-error paypal types
                amount: {
                  value: amount,
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          // @ts-expect-error paypal types
          return actions.order.capture().than((details) => {
            onSuccess(details);
          });
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
