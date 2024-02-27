import reflex as rx


def header() -> rx.Component:
    return rx.vstack(
        rx.avatar(fallback="LW", size="9", radius="full"),
        rx.text("@logisticawoodward"),
        rx.text("Go, we've got you covered"),
        rx.text("""It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here, content here',
                making it look like readable English"""),
    )
