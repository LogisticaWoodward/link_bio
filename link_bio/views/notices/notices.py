import reflex as rx
from link_bio.components.title import title
from link_bio.components.link_notice import link_notice
from link_bio.styles.colors import BASE_COLORS as Color


def notices() -> rx.Component:
    return rx.vstack(
        title("Destacados", color=Color.GAMBOGE.value),
        rx.hstack(
            link_notice(
                "t21_lw.jpg",
                "https://www.facebook.com/photo?fbid=998699201674322&set=a.501371151407132"
            ),
            link_notice(
                "t21.jpg",
                "https://t21.com.mx/los-100-influyentes-del-transporte-y-la-logistica-reconoce-a-empresarios-que-estan-cambiando-al-pais/"
            ),
        ),
        width="100%",
        align="start",
        spacing="3",
    )
