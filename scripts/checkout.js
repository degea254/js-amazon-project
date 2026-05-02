import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";

console.log('checkout.js loaded');

console.log('before renderOrderSummary');
renderOrderSummary();
console.log('after renderOrderSummary');

console.log('before renderPaymentSummary');
renderPaymentSummary();
console.log('after renderPaymentSummary');
