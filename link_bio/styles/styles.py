import reflex as rx
from enum import Enum
from .colors import BASE_COLORS as Color

# Constants
MAX_WIDTH = "600px"

# Sizes
class Size(Enum):
    SMALL = "0.5em"
    MEDIUM = "0.8em"
    DEFAULT = "1em"
    BIG = "2em"

# Styles
BASE_STYLE = {
    "font_size": "18px",
    "background_color": Color.BLUE.value,
    rx.heading: {
        "font_weight": "bold",
    },
    rx.button: {
        "background_color": Color.LIGHT_BLUE.value,
        "width": "100%",
        "height": "100%",
        "display": "block",
        "padding": Size.SMALL.value,
        "_hover": {
            "background_color": Color.DARK_BLUE.value,
        }
    },
    rx.text: {
        "color": Color.WHITE.value
    }
}

title_style = dict(
    width="100%",
    color=Color.WHITE.value,
    padding_top=Size.DEFAULT.value
)

button_title_style = dict(
    font_size="18px",
    color=Color.WHITE.value,
    font_weight="bold"
)

button_body_style = dict(
    font_size="16px",
    color= Color.DARK_WHITE.value,
)
