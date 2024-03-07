import reflex as rx
import link_bio.styles.styles as styles
from link_bio.styles.colors import BASE_COLORS as Color


def title(text: str, color: str=Color.WHITE.value) -> rx.Component:
    return rx.heading(
        text,
        style=styles.title_style,
        size="5",
        color=color,
    )
