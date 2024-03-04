import reflex as rx

from link_bio.components.link_button import link_button
from link_bio.components.title import title


def links() -> rx.Component:
    return rx.vstack(
        title("Contacto"),
        link_button(
            "Whatsapp",
            "Ponte en contacto con nosotros",
            "http://www.woodward.mx",
            "message-circle-more",
            "green",
        ),
        link_button(
            "Email",
            "contacto@woodward.mx",
            "http://www.woodward.mx",
            "mail",
            "blue",
        ),
        title("Redes sociales"),
        link_button(
            "Sitio web",
            "Encuentra artículos especializados dentro de nuestro blog",
            "http://www.woodward.mx",
            "globe",
            "ruby",
        ),
        link_button(
            "Síguenos en Facebook",
            "Entérate de los últimos acontecimientos",
            "https://www.facebook.com/WoodwardLogistica/about",
            "facebook",
            "blue",
        ),
        link_button(
            "Facebook Recursos Humanos",
            "Mira nuestras últimas vacantes!",
            "https://www.facebook.com/profile.php?id=61556152593471",
            "facebook",
            "blue"
        ),
        link_button(
            "Instagram",
            "Mira las fotos de nuestros eventos más recientes",
            "https://www.instagram.com/logisticawoodward/",
            "instagram",
            "amber"
        ),
        link_button(
            "Youtube",
            "Mira en directo el puerto de Manzanillo",
            "https://www.youtube.com/@logisticawoodward",
            "youtube",
            "ruby"
        ),
        link_button(
            "LinkedIn",
            "Mira nuestras últimas vacantes!",
            "https://www.linkedin.com/company/logisticawoodward/",
            "linkedin",
            "blue"
        ),
        width="100%",
        spacing="3",
    )
