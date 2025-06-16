const { createReadStream } = require("fs");
const { join } = require("path");

module.exports = async (req, res) => {
  try {
    const filePath = join(
      process.cwd(),
      "public",
      "downloads",
      "workerhub.apk"
    );

    res.setHeader("Content-Type", "application/vnd.android.package-archive");
    res.setHeader("Content-Disposition", "attachment; filename=WorkerHub.apk");

    const fileStream = createReadStream(filePath);
    fileStream.pipe(res);
  } catch (error) {
    console.error("Download error:", error);
    res.status(500).json({ error: "Failed to download file" });
  }
};
