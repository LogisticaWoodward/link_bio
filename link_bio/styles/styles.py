import reflex as rx
from enum import Enum
from .colors import BASE_COLORS as Color

# Constants
MAX_WIDTH = "632px"

# Sizes
class Size(Enum):
    SMALL = "0.5em"
    MEDIUM = "0.8em"
    DEFAULT = "1em"
    BIG = "2em"
    AVATAR = "4em"
    VERY_BIG = "22em"
    BIGGER = "25em"

STYLESHEETS = [
    "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
]

# Styles
BASE_STYLE = {
    "font_family": "Poppins",
    "background_color": Color.BLUE.value,
    rx.heading: {
        "font_family": "Poppins",
        "font_weight": "400",
    },
    rx.button: {
        "font_family": "Poppins",
        "background_color": Color.LIGHT_BLUE.value,
        "width": "100%",
        "height": "100%",
        "white_space": "normal",
        "text_align": "start",
        "padding": Size.SMALL.value,
        "_hover": {
            "background_color": Color.DARK_BLUE.value,
        }
    },
    rx.text: {
        "font_family": "Poppins",
        "color": Color.WHITE.value,
    },
    rx.text.strong: {
        "font_family": "Poppins",
        "font_weight": "500",
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
