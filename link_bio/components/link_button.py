import reflex as rx


def link_button(text: str, url: str, tag_icon: str, color_button: str) -> rx.Component:
    return rx.link(
        rx.button(rx.icon(tag=tag_icon), text),
        href=url,
        is_external=True,
        color_scheme=color_button,
    )
