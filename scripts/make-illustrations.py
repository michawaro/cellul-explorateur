from PIL import Image, ImageDraw, ImageFont
import os

ROOT = os.path.join(os.path.dirname(__file__), "..", "illustrations")


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


def make_repere_feuilles():
    src = os.path.join(ROOT, "repere-micrometre.webp")
    dst = os.path.join(ROOT, "repere-feuilles-question.webp")
    im = Image.open(src).convert("RGB")
    w, h = im.size
    target_w = 1200
    scale = target_w / w
    target_h = int(h * scale)
    im = im.resize((target_w, target_h), Image.Resampling.LANCZOS)
    draw = ImageDraw.Draw(im)

    # Masquer la 3e ligne orange « 10 feuilles = 1 000 µm »
    draw.rectangle([int(target_w * 0.02), int(target_h * 0.285), int(target_w * 0.44), int(target_h * 0.355)], fill=(255, 255, 255))
    draw.rectangle([int(target_w * 0.52), int(target_h * 0.58), int(target_w * 0.98), int(target_h * 0.78)], fill=(255, 255, 255))

    font = load_font(int(target_h * 0.075))
    draw.text((int(target_w * 0.54), int(target_h * 0.60)), "1 feuille = ? µm", fill=(224, 122, 40), font=font)

    im.save(dst, "WEBP", quality=82, method=6)
    print("repere", dst, im.size)


def draw_tape(draw, x, y, width, seg_w, height=36):
    border = (8, 122, 160)
    light = (140, 221, 242)
    end = x + width
    pos = x
    while pos < end - 1:
        seg_end = min(pos + seg_w, end)
        light_end = min(pos + max(seg_w - 3, 1), seg_end)
        draw.rectangle([pos, y, light_end, y + height], fill=light)
        if light_end < seg_end:
            draw.rectangle([light_end, y, seg_end, y + height], fill=border)
        mid = pos + seg_w / 2
        if pos < mid < seg_end:
            draw.line([(mid, y + 5), (mid, y + height - 5)], fill=border, width=2)
        pos += seg_w
    draw.rectangle([x, y, end, y + height], outline=border, width=3)


def make_elodee_encadrement():
    src = os.path.join(ROOT, "elodee-estimation-interactive.webp")
    dst = os.path.join(ROOT, "elodee-encadrement-tape.webp")
    im = Image.open(src).convert("RGB")
    w, h = im.size
    draw = ImageDraw.Draw(im)

    cell_left = 110 / 1200 * w
    cell_span = 844 / 1200 * w
    tape_top = 464 / 645 * h
    seg_count = 7.625
    visual_k = 6.5 / 7.625
    seg_w = cell_span / seg_count * visual_k
    tape_h = max(28, int(h * 0.056))

    draw_tape(draw, cell_left, tape_top, cell_span, seg_w, tape_h)

    label_font = load_font(max(14, int(h * 0.028)))
    lx, ly = cell_left + 8, tape_top - int(h * 0.05)
    tw, th = draw.textbbox((0, 0), "15 µm", font=label_font)[2:]
    draw.rectangle([lx - 4, ly - 2, lx + tw + 4, ly + th + 2], fill=(255, 255, 255))
    draw.text((lx, ly), "15 µm", fill=(8, 122, 160), font=label_font)

    handle_r = max(8, int(h * 0.016))
    hx = cell_left + cell_span + 2
    hy = tape_top + tape_h // 2
    draw.ellipse([hx - handle_r, hy - handle_r, hx + handle_r, hy + handle_r], fill=(255, 159, 67), outline=(255, 255, 255), width=3)

    im.save(dst, "WEBP", quality=82, method=6)
    print("elodee", dst, im.size)


if __name__ == "__main__":
    make_repere_feuilles()
    make_elodee_encadrement()
