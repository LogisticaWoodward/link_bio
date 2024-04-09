import reflex as rx

from link_bio.components.navbar import navbar
from link_bio.views.header.header import header
from link_bio.views.links.links import links
from link_bio.views.notices.notices import notices
from link_bio.components.webcam import webcam
from link_bio.components.footer import footer
import link_bio.styles.styles as styles
from link_bio.styles.styles import Size


def index() -> rx.Component:
    return rx.box(
        navbar(),
        rx.center(
            rx.vstack(
                header(),
                links(),
                notices(),
                # webcam("https://www.youtube.com/live/ty1ZyO9uHRw?si=kT14_NGfIm43nqWN"),
                max_width=styles.MAX_WIDTH,
                width="100%",
                margin_top=Size.BIG.value,
                margin_bottom=Size.BIG.value,
                padding_x=Size.DEFAULT.value,
                align="center",
            ),
        ),
        footer(),
    )


app = rx.App(
    stylesheets=styles.STYLESHEETS,
    style=styles.BASE_STYLE,
)
app.add_page(
    index,
    title="Logística Woodward, SC",
    description="Logística Woodward: Innovación y calidad en servicios aduanales desde Manzanillo y en las principales aduanas del país, para el comercio exterior mexicano desde 1930.",
    image="logo.svg",
)
