-- Initial schema only. Apply after reviewing and configuring the Worker.
PRAGMA foreign_keys = ON;
CREATE TABLE IF NOT EXISTS rooms (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  room_code TEXT NOT NULL UNIQUE,
  display_name TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  full_name TEXT NOT NULL,
  username TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  room_id INTEGER REFERENCES rooms(id),
  status TEXT NOT NULL DEFAULT 'active' CHECK(status IN ('active','expired','disabled')),
  expires_at TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS audit_log (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  actor TEXT NOT NULL,
  action TEXT NOT NULL,
  target_user_id TEXT,
  details_json TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT OR IGNORE INTO rooms(room_code, display_name) VALUES
('R01','Room 01'),('R02','Room 02'),('R03','Room 03'),('R04','Room 04'),('R05','Room 05'),
('R06','Room 06'),('R07','Room 07'),('R08','Room 08'),('R09','Room 09'),('R10','Room 10');
-- Never store plaintext passwords. password_hash must be generated with a suitable password-hashing
-- implementation in the backend. Do not expose this database directly to browsers.
