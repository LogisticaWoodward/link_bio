import reflex as rx


def navbar() -> rx.Component:
    return rx.box(
        rx.hstack(
            rx.text(
                "Logística Woodward",
                height="40px"
            ),
            position="sticky",
            bg="red",
            padding_x="16px",
            padding_y="8px",
            z_index="999"
        ),
    )

