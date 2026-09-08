CREATE TABLE IF NOT EXISTS business_checks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  business VARCHAR(255) NOT NULL,
  mobile VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL,
  website_status VARCHAR(255) NOT NULL,
  improvements TEXT,               -- stored as comma-separated values
  interest VARCHAR(255) NOT NULL,
  timeline VARCHAR(255) NOT NULL,
  discussion VARCHAR(255) NOT NULL,
  referral VARCHAR(100),
  referral_details TEXT,

  has_spun TINYINT(1) NOT NULL DEFAULT 0,
  prize_won VARCHAR(255),
  spun_at DATETIME,

  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

  INDEX idx_email (email)
);