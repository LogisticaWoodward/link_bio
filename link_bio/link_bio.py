import reflex as rx

from link_bio.components.navbar import navbar
from link_bio.views.header.header import header


class State(rx.State):
    pass


def index() -> rx.Component:
    return rx.center(
        rx.vstack(
            navbar(),
            header()
        ),
    )


app = rx.App()
app.add_page(index)
