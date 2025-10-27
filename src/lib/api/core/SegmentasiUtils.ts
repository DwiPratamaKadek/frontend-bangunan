export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}

export function isValidImage(file: File): boolean {
  const allowedTypes = ["image/png", "image/jpeg"];
  const maxSizeMB = 5;
  return allowedTypes.includes(file.type) && file.size / 1024 / 1024 < maxSizeMB;
}
