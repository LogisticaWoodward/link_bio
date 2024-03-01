import reflex as rx
from link_bio.components.link_button import link_button


def header() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.avatar(src="logo.svg", fallback="LW", size="9", radius="full"),
            rx.vstack(
                rx.vstack(
                    rx.heading(
                        "Go, we've got you covered",
                        size="8",
                        weight="bold",
                        color="rgb(0 80 156)",
                        as_="h2"
                    ),
                    rx.heading("@logisticawoodward", size="5", weight="bold", margin_top="0", as_="h1"),
                    spacing="0",
                ),
                rx.hstack(
                    rx.badge(
                        rx.flex(
                            rx.icon(tag="phone", size=25),
                            rx.vstack(
                                rx.text("+52 33 3793 8888", color="#fff", size="2"),
                                align="center"
                            ),
                            spacing="2",
                        ),
                        variant="solid",
                        color="rgb(2, 39, 74)",
                        padding="10px",
                    ),
                    margin_top="15px",
                ),
            ),
            align="center",
        ),
        rx.text(
            "En ",
            rx.text.strong("Logística Woodward"),
            """, no solo somos proveedores de
                servicios aduanales; somos aliados estratégicos de las empresas.
                Nos dedicamos a entender y atender las necesidades específicas
                de cada cliente, asegurando que sus operaciones sean sinónimo de
                eficiencia y confiabilidad.""", as_="p"),
        rx.text("""Somos un grupo de logística aduanal de clase mundial.
                Nuestra experiencia, innovación y servicio personalizado
                nos convierten en el mejor aliado.""", as_="p"),
    )
