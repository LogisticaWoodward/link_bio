import reflex as rx
import link_bio.styles.styles as styles
from link_bio.styles.styles import Size as Size


def link_notice(image: str, url: str) -> rx.Component:
    return (
        rx.link(
            rx.image(
                height=Size.BIGGER.value,
                src=image
            ),
            href=url,
            is_external=True,
        )
    )
