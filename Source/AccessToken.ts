

type Common =
 {
  expire?: number;   // Token access is revoked after this date.
  frequency?: number;
 };

type Amount =
 {
  currency: string,
  value: number,
  counterparty?: string;
 };


type GrantPaymentRequest =
 {
  payment:
  {
   source: string,
   destination: string,
   value: Amount,
  };
 };

export type GrantRequest = Common & (GrantPaymentRequest);