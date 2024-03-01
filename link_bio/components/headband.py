import reflex as rx
from link_bio.styles.styles import Size as Size
from link_bio.styles.styles import BASE_COLORS


def headband(title: str, body: str) -> rx.Component:
    return rx.box(
        rx.text(title, as_="span", weight="bold", color=BASE_COLORS.YELLOW.value),
        f" {body}", font_size=Size.MEDIUM.value, color=BASE_COLORS.WHITE.value
    )
