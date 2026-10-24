
/* ========================================
   RAPHEAL TOURS - JAVASCRIPT
======================================== */

"use strict";

// Owner's WhatsApp number in international format
const WHATSAPP_NUMBER = "254725415827";


/* ========================================
   1. HELPER FUNCTIONS
======================================== */

// Get a form field's value safely
function getFieldValue(form, fieldName) {
    const field = form.elements.namedItem(fieldName);
    return field ? field.value.trim() : "";
}

// Open WhatsApp with a prepared message
function openWhatsApp(message) {
    const whatsappURL =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
}

// Display a message on the page
function showStatus(elementId, message) {
    const statusElement = document.getElementById(elementId);

    if (statusElement) {
        statusElement.textContent = message;
    }
}


/* ========================================
   2. BOOKING FORM
======================================== */

const bookingForm = document.getElementById("booking-form");

if (bookingForm) {
    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!bookingForm.checkValidity()) {
            bookingForm.reportValidity();
            return;
        }

        const name = getFieldValue(bookingForm, "name");
        const email = getFieldValue(bookingForm, "email");
        const phone = getFieldValue(bookingForm, "phone");
        const destination = getFieldValue(bookingForm, "destination");
        const packageName = getFieldValue(bookingForm, "package");
        const travelDate = getFieldValue(bookingForm, "travel-date");
        const travelers = getFieldValue(bookingForm, "travelers");
        const budget = getFieldValue(bookingForm, "budget");
        const requests = getFieldValue(bookingForm, "requests");

        const message = `
NEW TOUR BOOKING ENQUIRY
Rapheal Tours

Full Name: ${name}
Email: ${email}
Phone: ${phone}
Destination: ${destination}
Tour Package: ${packageName}
Travel Date: ${travelDate}
Number of Travellers: ${travelers}
Budget: ${budget || "Not specified"}
Additional Requests: ${requests || "None"}

Please contact me about this tour enquiry.
        `.trim();

        showStatus(
            "booking-status",
            "Opening WhatsApp. Review your booking details and press Send."
        );

        openWhatsApp(message);
    });
}


/* ========================================
   3. CONTACT FORM
======================================== */

const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        const name = getFieldValue(contactForm, "name");
        const email = getFieldValue(contactForm, "email");
        const subject = getFieldValue(contactForm, "subject");
        const messageText = getFieldValue(contactForm, "message");

        const whatsappMessage = `
NEW CONTACT MESSAGE
Rapheal Tours

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${messageText}
        `.trim();

        showStatus(
            "contact-status",
            "Opening WhatsApp. Review your message and press Send."
        );

        openWhatsApp(whatsappMessage);
    });
}


/* ========================================
   4. AUTOMATIC COPYRIGHT YEAR
======================================== */

const copyrightElements =
    document.querySelectorAll(".copyright-text");

copyrightElements.forEach(function (element) {
    element.textContent =
        `© ${new Date().getFullYear()} Rapheal Tours. All rights reserved.`;
});


/* ========================================
   5. MOBILE NAVIGATION ACCESSIBILITY
======================================== */

// Allow keyboard users to navigate menu links.
// The CSS controls the menu layout on smaller screens.
const navigationLinks =
    document.querySelectorAll(".navigation-link");

navigationLinks.forEach(function (link) {
    link.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            link.blur();
        }
    });
});


/* ========================================
   6. IMAGE ERROR HANDLING
======================================== */

// Show a simple fallback if an image cannot load.
const websiteImages = document.querySelectorAll("img");

websiteImages.forEach(function (image) {
    image.addEventListener("error", function () {
        image.classList.add("image-load-error");
        image.alt = image.alt || "Image could not be loaded";
    });
});


/* ========================================
   7. CONSOLE MESSAGE
======================================== */

console.log("Rapheal Tours website JavaScript loaded successfully.");