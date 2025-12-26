import emailjs from "@emailjs/browser";
import { CONTACT_NUMBER } from "./constants";

export const submitForm = async (formData: any) => {
    return await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { ...formData, time: new Date().toLocaleString() },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    );
}


export const sendToWhatsApp = (formData) => {

    // Format the message nicely
    const message = `*New Contact Form Submission*%0a` + // %0a is a line break
        `--------------------------%0a` +
        `*Name:* ${formData.name}%0a` +
        `*Email:* ${formData.email}%0a` +
        `*Phone:* ${formData.phone}%0a` +
        `*Org:* ${formData.organization}%0a` +
        `*Service:* ${formData.service}%0a%0a` +
        `*Message:* ${formData.message}`;

    const whatsappURL = `https://wa.me/${CONTACT_NUMBER}?text=${message}`;

    // Open in a new tab
    window.open(whatsappURL, "_blank");
};