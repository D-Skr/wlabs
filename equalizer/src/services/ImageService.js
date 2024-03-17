const sharp = require("sharp");
const Image = require("../models/Image");

exports.processAndStoreImage = async (expenseId, imageBuffer, imageName) => {
  // Resize the image and limit its size to 500KB
  const resizedImageBuffer = await sharp(imageBuffer)
    .resize({ width: 1024 })
    .jpeg({ quality: 80 })
    .toBuffer();

  // Check if the resized image is still larger than 500KB
  // If it is, reduce the quality further
  let finalImageBuffer = resizedImageBuffer;
  if (resizedImageBuffer.length > 500 * 1024) {
    finalImageBuffer = await sharp(resizedImageBuffer)
      .jpeg({ quality: 50 })
      .toBuffer();
  }

  // Store the image in the database
  const newImage = new Image({
    expenseId,
    name: imageName,
    data: finalImageBuffer,
  });
  await newImage.save();

  return newImage;
};

exports.getImagesByExpenseId = async (expenseId) => {
  const images = await Image.find({ expenseId });
  return images;
};
