import reflex as rx

from link_bio.components.link_button import link_button


def links() -> rx.Component:
    return rx.vstack(
        link_button(
            "Visita nuestro sitio web",
            "https://www.woodward.mx",
            "globe",
            "ruby",
        ),
        link_button(
            "Síguenos en Facebook",
            "https://www.facebook.com/WoodwardLogistica/about",
            "facebook",
            "blue",
        ),
        link_button(
            "Recursos Humanos Logística Woodward FB",
            "https://www.facebook.com/profile.php?id=61556152593471",
            "facebook",
            "blue"
        ),
        link_button(
            "Síguenos en Instagram",
            "https://www.instagram.com/logisticawoodward/",
            "instagram",
            "amber"
        ),
        link_button(
            "Mira nuestros últimos vídeos",
            "https://www.youtube.com/@logisticawoodward",
            "youtube",
            "red"
        ),
        link_button(
            "LinkedIn",
            "https://www.linkedin.com/company/logisticawoodward/",
            "linkedin",
            "blue"
        ),
    )
