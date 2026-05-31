import { Router, Request, Response } from "express";
import multer from "multer";
import { pool, initDB } from "../db";

const router = Router();
const upload = multer({ storage: multer.memoryStorage() });

initDB().catch(console.error);

router.post(
  "/enquiry",
  upload.single("attachment"),
  async (req: Request, res: Response) => {
    try {
      const {
        fullName,
        organisation,
        role,
        email,
        phone,
        country,
        enquiryType,
        message,
      } = req.body;

      // Basic validation
      if (!fullName || !organisation || !email || !country || !message) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      await pool.execute(
        `INSERT INTO enquiries 
        (full_name, organisation, role, email, phone, country, enquiry_type, message)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          fullName,
          organisation,
          role || null,
          email,
          phone || null,
          country,
          enquiryType,
          message,
        ],
      );

      return res
        .status(201)
        .json({ success: true, message: "Enquiry received" });
    } catch (err) {
      console.error("Enquiry error:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
  },
);

export { router as enquiryRouter };
