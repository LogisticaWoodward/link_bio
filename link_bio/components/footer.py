import reflex as rx
import datetime
from link_bio.styles.styles import Size
from link_bio.styles.styles import BASE_COLORS


def footer() -> rx.Component:
    return rx.vstack(
        rx.link(
            rx.image(
                src="/logo.svg",
                width="30px",
                height="30px",
                border="0.5px solid #fff",
                border_radius="5px"
            ),
            href="http://www.woodward.mx",
            is_external=True,
        ),
        rx.text(
            f"© {datetime.date.today().year} Logística Woodward, SC",
            color=BASE_COLORS.WHITE.value,
            font_weight="bold",
        ),
        align="center",
        padding_bottom=Size.BIG.value,
    )
