LOGO FILES
==========

icon.svg              → square icon only (source file, edit this to change the icon)
logo.svg              → icon + "Polaroid4yo" wordmark, for social/print use
icon-16.png           → tiny favicon size
icon-32.png           → favicon size
icon-180.png          → same image as apple-touch-icon.png
icon-192.png          → Android home-screen icon size
icon-512.png          → large icon, used as the Open Graph share image
apple-touch-icon.png  → used automatically by iOS when someone saves the
                         site to their home screen

Where these are used:
- favicon.ico (in the project root) and icon.svg are linked from
  index.html's <head> as the browser tab icon.
- apple-touch-icon.png is linked for iOS home-screen bookmarks.
- icon-512.png is set as the Open Graph preview image (the thumbnail
  shown when the link is shared on social media / Instagram / WhatsApp).

The site's header and footer navigation still use a small inline SVG
in index.html (search for "logo-mark") instead of these files, because
inline SVG can use the site's CSS color variables and stays perfectly
sharp at any size. If you redesign the logo, update BOTH: the inline
SVG in index.html (for the on-site nav/footer) and icon.svg / logo.svg
here (used for the favicon, share image, and any external use like a
GitHub README or Instagram profile picture).

To regenerate the PNG sizes after editing icon.svg (requires Python +
the cairosvg package: pip install cairosvg --break-system-packages):

  python3 -c "
import cairosvg
for s in [16, 32, 180, 192, 512]:
    cairosvg.svg2png(url='icon.svg', write_to=f'icon-{s}.png', output_width=s, output_height=s)
"
