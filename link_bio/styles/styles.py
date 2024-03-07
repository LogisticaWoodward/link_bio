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
    VERY_BIG = "22em"
    BIGGER = "25em"

STYLESHEETS = [
    "https://fonts.googleapis.com/css?family=Poppins:wght@300;500&display=swap"
]

# Styles
BASE_STYLE = {
    "font_family": "Poppins",
    "background_color": Color.BLUE.value,
    rx.heading: {
        "font_family": "Poppins",
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
        "font_family": "Poppins-Light",
        "color": Color.WHITE.value,
    },
    rx.text.strong: {
        "font_family": "Poppins-Light",
    }
}

title_style = dict(
    width="100%",
    padding_top=Size.DEFAULT.value
)

button_title_style = dict(
    color=Color.WHITE.value,
)

button_body_style = dict(
    color= Color.DARK_WHITE.value,
)
