import reflex as rx

from link_bio.components.link_button import link_button
from link_bio.components.title import title


def links() -> rx.Component:
    return rx.vstack(
        title("Contacto"),
        link_button(
            "Whatsapp",
            "Ponte en contacto con nosotros",
            "https://wa.me/523141449133?text=Hello, I'm interested about LW's services",
            "message-circle-more",
        ),
        link_button(
            "Email",
            "contacto@woodward.mx",
            "mailto:contacto@woodward.mx",
            "mail",
        ),
        title("Redes sociales"),
        link_button(
            "Sitio web",
            "Encuentra artículos especializados",
            "http://www.woodward.mx",
            "layout-template",
        ),
        link_button(
            "Síguenos en Facebook",
            "Entérate de los últimos acontecimientos",
            "https://www.facebook.com/WoodwardLogistica/about",
            "facebook",
        ),
        link_button(
            "Facebook Recursos Humanos",
            "Entérate de nuestras últimas vacantes",
            "https://www.facebook.com/profile.php?id=61556152593471",
            "facebook",
        ),
        link_button(
            "Instagram",
            "Mira nuestros eventos más recientes",
            "https://www.instagram.com/logisticawoodward/",
            "instagram",
        ),
        link_button(
            "Youtube",
            "Mira en directo el puerto de Manzanillo",
            "https://www.youtube.com/@logisticawoodward",
            "youtube",
        ),
        link_button(
            "LinkedIn",
            "Conecta con profesionales de la industria",
            "https://www.linkedin.com/company/logisticawoodward/",
            "linkedin",
        ),
        width="100%",
        spacing="3",
    )
