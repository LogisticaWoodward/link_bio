import reflex as rx
import link_bio.styles.styles as styles
from link_bio.styles.styles import Size as Size


def link_notice(image: str, url: str, alt: str) -> rx.Component:
    return rx.link(
        rx.image(
            src=image,
            height=Size.BIGGER.value,
            width="auto",
            alt=alt,
        ),
        href=url,
        is_external=True,
    )
