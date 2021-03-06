const imageValidator = (files: File | File[]) => {
  const regex = /\.(jpg|svg|jpeg|png|bmp|gif|webp)$/i;
  if (!files) {
    return true;
  }

  if (Array.isArray(files)) {
    return files.every(file => regex.test(file.name));
  }

  return regex.test(files.name);
};

export default imageValidator;
