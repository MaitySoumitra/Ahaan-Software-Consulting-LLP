const pool = require("../db/mysql");

const PRIZES = [
  "Free Website Audit",
  "15% Off Your Project",
  "Free Logo Refresh",
  "1-on-1 Strategy Call",
  "Free Domain, 1 Year",
  "10% Off Your Project",
];

// POST /api/business-check
exports.submitBusinessCheck = async (req, res) => {
  try {
    const {
      name,
      business,
      mobile,
      email,
      websiteStatus,
      improvements,
      interest,
      timeline,
      discussion,
      referral,
      referralDetails,
    } = req.body;

    if (!name || !business || !mobile || !email || !websiteStatus || !interest || !timeline || !discussion) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const improvementsStr = Array.isArray(improvements) ? improvements.join(", ") : improvements || null;

    const [result] = await pool.query(
      `INSERT INTO business_checks
        (name, business, mobile, email, website_status, improvements, interest, timeline, discussion, referral, referral_details)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        name,
        business,
        mobile,
        normalizedEmail,
        websiteStatus,
        improvementsStr,
        interest,
        timeline,
        discussion,
        referral || null,
        referralDetails || null,
      ]
    );

    res.status(201).json({ message: "Lead saved", id: result.insertId });
  } catch (err) {
    console.error("❌ submitBusinessCheck error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// POST /api/business-check/spin
exports.spinBusinessCheck = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: "Email is required" });

    const normalizedEmail = email.trim().toLowerCase();

    // Get this email's most recent submission
    const [rows] = await pool.query(
      `SELECT id, has_spun, prize_won FROM business_checks
       WHERE email = ? ORDER BY created_at DESC LIMIT 1`,
      [normalizedEmail]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "Submit the business check form first" });
    }

    const lead = rows[0];

    if (lead.has_spun) {
      // 409 = Conflict, matches what the frontend checks for
      return res.status(409).json({ message: "This email has already spun", prize: lead.prize_won });
    }

    const prize = PRIZES[Math.floor(Math.random() * PRIZES.length)];

    await pool.query(
      `UPDATE business_checks SET has_spun = 1, prize_won = ?, spun_at = NOW() WHERE id = ?`,
      [prize, lead.id]
    );

    res.json({ prize });
  } catch (err) {
    console.error("❌ spinBusinessCheck error:", err);
    res.status(500).json({ message: "Server error" });
  }
};