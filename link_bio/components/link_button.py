import reflex as rx
import link_bio.styles.styles as styles


def link_button(title: str, body: str, url: str, tag_icon: str, color_button: str) -> rx.Component:
    return rx.link(
        rx.button(
            rx.hstack(
                rx.icon(tag=tag_icon, size=35),
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
        color_scheme=color_button,
        width="100%",
    )
