import reflex as rx
from link_bio.styles.styles import Size
from link_bio.styles.colors import BASE_COLORS


def navbar() -> rx.Component:
    return rx.hstack(
        rx.link(
            rx.image(src="/logo_full.png", width="160px", height="auto"),
            href="#",
            margin_left="15em"
        ),
        position="sticky",
        top="0",
        bg=BASE_COLORS.WHITE.value,
        padding_x=Size.DEFAULT.value,
        padding_y=Size.SMALL.value,
        z_index="999",
    )
