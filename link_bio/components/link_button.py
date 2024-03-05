import reflex as rx
import link_bio.styles.styles as styles
from link_bio.styles.styles import Size as Size


def link_button(title: str, body: str, url: str, tag_icon: str) -> rx.Component:
    return rx.link(
        rx.button(
            rx.hstack(
                rx.icon(tag=tag_icon, size=35, margin=Size.SMALL.value),
                rx.vstack(
                    rx.text(title, style=styles.button_title_style),
                    rx.text(body, style=styles.button_body_style),
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
