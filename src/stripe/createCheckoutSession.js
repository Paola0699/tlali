import {
  getFirestore,
  collection,
  addDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import initializeStripe from "./initializeStripe";
import { app } from "@/firebase/firebase";

export async function createCheckoutSession(uid, product) {
  const db = getFirestore(app);

  //TODO: Agregar el id del producto dinamico dependiendo de la membresía que elijan
  //TODO: Cambiar el tipo de membresía despues de que el usuario ya hizo el pago exitoso
  //TODO: Cambiar el redirect URL despues de que el usuario ya pagó

  // Crear una nueva sesión de pago en la subcolección dentro del documento de este usuario.
  const checkoutSessionsCollectionRef = collection(
    doc(db, "users", uid),
    "checkout_sessions"
  );
  const data = {
    price: product.price, // Reemplaza con el valor real del precio.
    mode: "payment",
    success_url: `${window.location.origin}/usuario/success`,
    cancel_url: `${window.location.origin}/usuario/suscripciones`,
    metadata: {
      membership_type: product.name
    }
  };

  // Agregar un nuevo documento a la subcolección 'checkout_sessions'.
  const checkoutSessionRef = await addDoc(checkoutSessionsCollectionRef, data);

  // Esperar a que la sesión de pago se adjunte mediante la extensión.
  onSnapshot(checkoutSessionRef, async (snap) => {
    const { sessionId } = snap.data();
    if (sessionId) {
      // Tenemos una sesión, redirijamos a Checkout.
      const stripe = await initializeStripe();
      stripe.redirectToCheckout({ sessionId });
    }
  });
}

