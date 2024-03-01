import reflex as rx
from link_bio.styles.styles import Size


def navbar() -> rx.Component:
    return rx.hstack(
        rx.link(
            rx.image(src="/logo_full.png", width="160px", height="auto"),
            href="#",
        ),
        position="sticky",
        top="0",
        bg="#f5f5f5",
        padding_x=Size.DEFAULT.value,
        padding_y=Size.SMALL.value,
        z_index="999",
    )
