"""Build the MonoSR thumbnail from the actual 3D-box panel in Figure 2.
Usage: python3 gif_todo/tools/build_monosr_thumbnail.py --pdf /path/to/2511.19119.pdf
Requires PyMuPDF and Pillow. All boxes and object labels come from the paper.
"""
import argparse, io, sys
from pathlib import Path
if Path('/tmp/homepage-figure-libs').exists():sys.path.insert(0,'/tmp/homepage-figure-libs')
import fitz
from PIL import Image

ROOT=Path(__file__).resolve().parents[2]

def build(pdf_path):
    doc=fitz.open(pdf_path)
    # Figure 2, PDF page 3. Select by intrinsic image dimensions instead of an
    # xref constant so unrelated PDF object numbering changes do not matter.
    candidates=[im for im in doc[2].get_images(full=True) if im[2:4]==(559,434)]
    if len(candidates)!=1:raise ValueError('Expected one 559×434 Figure 2 panel')
    source=Image.open(io.BytesIO(doc.extract_image(candidates[0][0])['image'])).convert('RGB')
    # Remove only the original filename header and narrow white page margins.
    panel=source.crop((5,18,554,428))
    image=panel.resize((1098,820),Image.Resampling.LANCZOS)
    image.save(ROOT/'assets/papers/paper-04.webp',quality=95,method=6)
    image.save('/tmp/monosr-thumbnail-bbox.png')
    print(image.size)

if __name__=='__main__':
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--pdf',required=True)
    build(parser.parse_args().pdf)
