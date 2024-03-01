import reflex as rx
import datetime


def footer() -> rx.Component:
    return rx.hstack(
        rx.text(
            f"© {datetime.date.today().year} Logística Woodward, SC",
            # color="#fff",
            font_weight="bold",
            height="40px",
        ),
        rx.link(
            rx.image(src="/logo.svg", width="30px", height="30px", border="1px solid #fff",),
            href="https://www.woodward.mx",
            is_external=True
        ),
        bg="#f5f5f5",
        padding_x="16px",
        padding_y="8px",
    )
