from PIL import Image, ImageDraw, ImageFont
import os

src = os.path.join(os.path.dirname(__file__), "..", "illustrations", "repere-micrometre.webp")
dst = os.path.join(os.path.dirname(__file__), "..", "illustrations", "repere-feuilles-question.webp")

im = Image.open(src).convert("RGB")
w, h = im.size
target_w = 1200
scale = target_w / w
target_h = int(h * scale)
im = im.resize((target_w, target_h), Image.Resampling.LANCZOS)
draw = ImageDraw.Draw(im)

draw.rectangle([int(target_w * 0.02), int(target_h * 0.285), int(target_w * 0.44), int(target_h * 0.355)], fill=(255, 255, 255))
draw.rectangle([int(target_w * 0.52), int(target_h * 0.58), int(target_w * 0.98), int(target_h * 0.78)], fill=(255, 255, 255))

def load_font(size):
    for name in [
        r"C:\Windows\Fonts\segoepr.ttf",
        r"C:\Windows\Fonts\comic.ttf",
        r"C:\Windows\Fonts\arial.ttf",
    ]:
        try:
            return ImageFont.truetype(name, size)
        except OSError:
            pass
    return ImageFont.load_default()

font = load_font(int(target_h * 0.075))
draw.text((int(target_w * 0.54), int(target_h * 0.60)), "1 feuille = ? µm", fill=(224, 122, 40), font=font)

im.save(dst, "WEBP", quality=82, method=6)
print(dst, im.size, os.path.getsize(dst))
