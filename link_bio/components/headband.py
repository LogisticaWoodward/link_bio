import reflex as rx
from link_bio.styles.styles import Size as Size
from link_bio.styles.colors import BASE_COLORS


def headband(title: str, body: str) -> rx.Component:
    return rx.box(
        rx.text(
            title,
            weight="bold",
            color=BASE_COLORS.GAMBOGE.value,
            as_="span",
        ),
        f" {body}",
        text_align="center",
        font_size=Size.MEDIUM.value,
        color=BASE_COLORS.WHITE.value,
        font_weight="bold",
    )
