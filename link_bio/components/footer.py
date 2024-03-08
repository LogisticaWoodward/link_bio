import reflex as rx
import datetime
from link_bio.styles.styles import Size
from link_bio.styles.colors import BASE_COLORS


def footer() -> rx.Component:
    return rx.vstack(
        rx.link(
            rx.image(
                src="/logo.svg",
                width=Size.BIG.value,
                height=Size.BIG.value,
                border="0.5px solid #fff",
                border_radius="5px",
                alt="Logotipo de Logística Woodward. Bandera náutica que corresponde a la letra \"dobleu\".",
            ),
            href="http://www.woodward.mx",
            is_external=True,
        ),
        rx.text(
            f"© {datetime.date.today().year} Logística Woodward, SC",
            color=BASE_COLORS.DARK_WHITE.value,
        ),
        align="center",
        padding_bottom=Size.BIG.value,
    )
