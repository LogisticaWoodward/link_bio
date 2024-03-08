import reflex as rx
from link_bio.components.title import title
from link_bio.components.link_notice import link_notice
from link_bio.styles.colors import BASE_COLORS as Color


def notices() -> rx.Component:
    return rx.vstack(
        title("Destacados", color=Color.GAMBOGE.value),
        rx.tablet_and_desktop(
            rx.hstack(
                link_notice(
                    "t21_lw.jpg",
                    "https://www.facebook.com/photo?fbid=998699201674322&set=a.501371151407132",
                    """Imagen de reconocimiento de la revista T21 a Guillermo Woodward,
                    CEO de Logística Woodward, dentro del ranking de las 100 personas más
                    influyentes en la industria transportista y logística en México.""",
                ),
                link_notice(
                    "t21.jpg",
                    "https://t21.com.mx/los-100-influyentes-del-transporte-y-la-logistica-reconoce-a-empresarios-que-estan-cambiando-al-pais/",
                    """Imagen diseñada por Logística Woodward felicitando a Guillermo Woodward, CEO de la empresa,
                    por su reconocimiento dado por la revista T21.""",
                ),
                width="100%",
                justify="between",
            ),
        ),
        rx.mobile_only(
            rx.vstack(
                link_notice(
                    "t21.jpg",
                    "https://t21.com.mx/los-100-influyentes-del-transporte-y-la-logistica-reconoce-a-empresarios-que-estan-cambiando-al-pais/",
                    """Imagen de reconocimiento de la revista T21 a Guillermo Woodward,
                    CEO de Logística Woodward, dentro del ranking de las 100 personas más
                    influyentes en la industria transportista y logística en México."""
                ),
                align="center",
                spacing="3",
            ),
        ),
        width="100%",
        spacing="3",
    )
