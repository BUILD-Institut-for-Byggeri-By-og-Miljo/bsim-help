"""Render the front-page banner of the help book: the top bar of BSim's About
box (the BSim red, the logo on a white tile, "BSim" / "Building Simulation"),
at 3x the size it is shown in, so it stays sharp on high-DPI screens.

Input : ..\BSim\Artwork\bsim_icon.svg   (BSim logo)
        ..\BSim\Artwork\bbbbuild-logo-transperent.png   (BUILD / AAU seal, English)
Output: da\24Miscellaneous\assets\frontpage_banner.png   (shared by da and en)
        en\24Miscellaneous\assets\frontpage_banner.png
        en\24Miscellaneous\assets\frontpage_build.png   (English seal; the Danish
                                                          page keeps its own)

Requires: pip install resvg-py pillow  (and the Segoe UI fonts, i.e. Windows)
Run from anywhere: python make_frontpage.py
"""
import io
import os
import re

import resvg_py
from PIL import Image, ImageDraw, ImageFont

HERE = os.path.dirname(os.path.abspath(__file__))
ARTWORK = os.path.join(HERE, "..", "BSim", "Artwork")
FONTS = os.path.join(os.environ.get("WINDIR", r"C:\Windows"), "Fonts")

BRAND = (0x7A, 0x10, 0x28)
BRAND_TEXT = (0xF5, 0xE6, 0xEA)

SCALE = 3
W, H = 480 * SCALE, 104 * SCALE		# shown at 480 x 104


def logo_tile(size):
    """The logo on a white rounded tile with a margin, as in the About box."""
    big = size * 4
    tile = Image.new("RGBA", (big, big), (0, 0, 0, 0))
    ImageDraw.Draw(tile).rounded_rectangle((0, 0, big - 1, big - 1), radius=big * 0.2, fill=(255, 255, 255, 255))
    tile = tile.resize((size, size), Image.LANCZOS)
    inner = round(size * 0.78)
    with open(os.path.join(ARTWORK, "bsim_icon.svg"), encoding="utf-8") as f:
        svg = re.sub(r"<metadata>.*?</metadata>", "", f.read(), flags=re.S)
    png = resvg_py.svg_to_bytes(svg_string=svg, width=inner, height=inner)
    tile.alpha_composite(Image.open(io.BytesIO(bytes(png))).convert("RGBA"),
                         ((size - inner) // 2, (size - inner) // 2))
    return tile


def banner():
    im = Image.new("RGBA", (W, H), BRAND + (255,))
    tile = 76 * SCALE
    pad = (H - tile) // 2
    im.alpha_composite(logo_tile(tile), (pad, pad))

    draw = ImageDraw.Draw(im)
    title = ImageFont.truetype(os.path.join(FONTS, "seguisb.ttf"), 44 * SCALE)
    sub = ImageFont.truetype(os.path.join(FONTS, "segoeui.ttf"), 17 * SCALE)
    x = pad + tile + 18 * SCALE
    draw.text((x, 18 * SCALE), "BSim", font=title, fill=(255, 255, 255))
    draw.text((x + 2 * SCALE, 70 * SCALE), "Building Simulation", font=sub, fill=BRAND_TEXT)
    return im.convert("RGB")


def build_seal(size):
    im = Image.open(os.path.join(ARTWORK, "bbbbuild-logo-transperent.png")).convert("RGBA")
    im = im.crop(im.getbbox())
    side = max(im.size)
    sq = Image.new("RGBA", (side, side), (0, 0, 0, 0))
    sq.paste(im, ((side - im.size[0]) // 2, (side - im.size[1]) // 2))
    return sq.resize((size, size), Image.LANCZOS)


def main():
    b = banner()
    for lang in ("da", "en"):
        out = os.path.join(HERE, lang, "24Miscellaneous", "assets", "frontpage_banner.png")
        b.save(out, optimize=True)
        print(out)
    out = os.path.join(HERE, "en", "24Miscellaneous", "assets", "frontpage_build.png")
    build_seal(240 * SCALE // 2).save(out, optimize=True)
    print(out)


if __name__ == "__main__":
    main()
