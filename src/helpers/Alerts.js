import Swal from "sweetalert2";

export const messageAlert = (title, text, type) => {
    Swal.fire({
        title: title,
        text: text,
        icon: type,
        confirmButtonText: "¡Entendido!",
        customClass: {
            confirmButton: 'my-swal-confirm-button', // Clase personalizada para el botón de confirmación
        }
    });
};