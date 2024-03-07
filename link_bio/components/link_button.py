import reflex as rx
import link_bio.styles.styles as styles
from link_bio.styles.styles import Size as Size
from link_bio.styles.colors import BASE_COLORS as Color


def link_button(title: str, body: str, url: str, tag_icon: str) -> rx.Component:
    return rx.link(
        rx.button(
            rx.hstack(
                rx.icon(
                    tag=tag_icon,
                    size=35,
                    margin=Size.SMALL.value,
                    stroke_width=1.5,
                    color=Color.DARK_WHITE.value
                ),
                rx.vstack(
                    rx.text(title, style=styles.button_title_style, weight="medium", size="3"),
                    rx.text(body, style=styles.button_body_style, weight="light", size="1"),
                    spacing="0",
                ),
                width="100%",
                align="center"
            ),
        ),
        href=url,
        is_external=True,
        width="100%",
    )
