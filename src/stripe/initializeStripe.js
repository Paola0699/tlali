import {Stripe, loadStripe} from "@stripe/stripe-js";

let stripePromise = null
const initializeStripe = async () => {
    if(!stripePromise){
        stripePromise = await loadStripe("pk_live_51OXXWxHAhXq7aUmN7OFrkvDbsvt3sRG0XCPJhAyjRKm8FHFwQuiiTBmglts15Di2X55lJMVxCNey8lxg8QO4Ewfq00hTx2Cb4s");
    }
    return stripePromise;
}
export default initializeStripe