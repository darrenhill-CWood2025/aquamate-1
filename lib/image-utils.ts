export function getImageSize(src: string) {
  // Default sizes for different image types
  const sizes = {
    'logo.png': { width: 150, height: 40 },
    'hero-image.png': { width: 1920, height: 1080 },
    'testimonial-1.jpg': { width: 400, height: 400 },
    'testimonial-2.jpg': { width: 400, height: 400 },
    // Add more image sizes as needed
  }

  // Get the filename from the path
  const filename = src.split('/').pop()
  return sizes[filename as keyof typeof sizes] || { width: 1200, height: 800 }
} 