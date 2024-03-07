import reflex as rx
from link_bio.components.headband import headband
from link_bio.styles.colors import BASE_COLORS


def header() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.avatar(
                src="logo.svg",
                fallback="LW",
                size="9",
                radius="small",
                border=f"1px solid {BASE_COLORS.WHITE.value}",
            ),
            rx.vstack(
                rx.heading(
                    "Go, we've got you covered",
                    size="7",
                    color=BASE_COLORS.GAMBOGE.value,
                    as_="h2"
                ),
                rx.heading(
                    "@logisticawoodward",
                    size="5",
                    color=BASE_COLORS.DARK_WHITE.value,
                    margin_top="0",
                    as_="h1"
                ),
                spacing="0",
            ),
            align="center",
            spacing="5",
        ),
        rx.flex(
            headband("+85", "años de experiencia"),
            headband("+5,000", "TU's anuales"),
            headband("+15,000", "guías aéres anuales"),
            width="100%",
            direction="row",
            justify="between"
        ),
        rx.text(
            "En ",
            rx.text.strong("Logística Woodward"),
            """, no solo somos proveedores de
                servicios aduanales; somos aliados estratégicos de las empresas.
                Nos dedicamos a entender y atender las necesidades específicas
                de cada cliente, asegurando que sus operaciones sean sinónimo de
                eficiencia y confiabilidad.""", size="2", as_="p"),
        spacing="3",
    )
