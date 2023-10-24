import {Stripe, loadStripe} from "@stripe/stripe-js";

let stripePromise = null
const initializeStripe = async () => {
    if(!stripePromise){
        stripePromise = await loadStripe("pk_test_51O0t1IJtRlO4IsvvrVPSnDnp3q6WmpFKLsri7tUGKgiJe6Z2TFzdnpjZjzC9iY760hWO6zANClJK7rWHUqhwTX1X003oes7fXd");
    }
    return stripePromise;
}
export default initializeStripe