/** @type {import('tailwindcss').Config} */

import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";
import container from "@tailwindcss/container-queries";
import forms from "@tailwindcss/forms";

module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            container: {
                center: true,
                padding: "2rem",
            },
            colors: {
                primary: "#2A6FFF",
                secondary: "#001833",
                neutral: "#EFEFEF",
            },
            fontFamily: {
                "urbane-medium": ["Urbane Medium", "sans-serif"],
                "urbane-bold": ["Urbane Bold", "sans-serif"],
                poppins: ["Poppins", "sans-serif"],
            },
        },
    },
    plugins: [typography, aspectRatio, container, forms],
};
