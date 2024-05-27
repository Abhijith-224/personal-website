from PIL import Image

# Load the image
image_path = '/mnt/data/{FB7FC90C-88B5-4003-A74C-0B7276727183}.png.jpg'
image = Image.open(image_path)

# Get the color of the body background
body_background_color = image.getpixel((0, 0))

# Fill the background with the body background color
new_image = Image.new('RGB', image.size, body_background_color)
new_image.paste(image, (0, 0))

# Save the new image
output_path = 'D:/image_with_body_background.png'
new_image.save(output_path)

output_path
