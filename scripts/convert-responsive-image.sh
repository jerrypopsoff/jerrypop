# Usage
#
# ```
# ./convert-responsive-image <path-to-image>
# ```
#
# ```
# ./convert-responsive-image src/images/glamorous-jalapeno-cheddar.jpeg
# ```

filename=$(basename -- "$1")
extension="${filename##*.}"
filename="${filename%.*}"

# Convert image to webp format with 80% quality (recommended).
cwebp -q 80 $1 -o "${filename}.webp"

# Resize images to standardized sizes.
convert $1 -resize 600x600 "${filename}-600.${extension}"
convert $1 -resize 1200x1200 "${filename}-1200.${extension}"
convert $1 -resize 2400x2400 "${filename}-2400.${extension}"
convert "${filename}.webp" -resize 600x600 "${filename}-600.webp"
convert "${filename}.webp" -resize 1200x1200 "${filename}-1200.webp"
convert "${filename}.webp" -resize 2400x2400 "${filename}-2400.webp"
