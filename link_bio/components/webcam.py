import reflex as rx

from link_bio.components.title import title
from link_bio.styles.colors import BASE_COLORS as Color
from link_bio.styles.styles import Size


def webcam(url_stream: str) -> rx.Component:
    return rx.vstack(
        title("Puerto de Manzanillo en vivo", Color.GAMBOGE.value),
        rx.tablet_and_desktop(
            rx.video(
                url=url_stream,
                width="100%",
                height=Size.VERY_BIG.value,
                controls=False,
                light=False,
            ),
            width="100%",
        ),
        rx.mobile_only(
            rx.video(
                url=url_stream,
                width="100%",
                height="200px",
                controls=False,
                light=False,
            ),
            width="100%",
        ),
        width="100%",
        spacing="3",
    )
