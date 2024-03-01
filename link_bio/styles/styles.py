import reflex as rx
from enum import Enum

# Constants
MAX_WIDTH = "600px"

# Colors
class BASE_COLORS(Enum):
    WHITE = "#FCFCFC"
    RED = "#ED1C24"
    BLUE = "#00509C"
    YELLOW = "#FA9F42"

# Sizes
class Size(Enum):
    SMALL = "0.5em"
    MEDIUM = "0.8em"
    DEFAULT = "1em"
    BIG = "2em"

# Styles
BASE_STYLE = {
    rx.button: {
        "width": "100%",
        "height": "100%",
        "display": "block",
        "padding": Size.SMALL.value,
    },
    rx.text: {
        "color": BASE_COLORS.WHITE.value
    }
}

title_style = dict(
    width="100%",
    color=BASE_COLORS.WHITE.value,
    padding_top=Size.DEFAULT.value
)

button_title_style = dict(
    font_size=Size.DEFAULT.value,
    font_weight="bold"
)

button_body_style = dict(
    font_size=Size.MEDIUM.value
)
