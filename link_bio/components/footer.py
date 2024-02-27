import reflex as rx
import datetime


def footer() -> rx.Component:
    return rx.box(
        rx.hstack(
            rx.text(f"© {datetime.date.today().year} Logística Woodward, SC"),
            rx.link(
                rx.image(src="favicon.ico"),
                href="https://www.woodward.mx",
                is_external=True
            ),
        )
    )
