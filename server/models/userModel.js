import pool from "../config/db.js";

export const findUserByEmail = async (email) => {
  const result = await pool.query(
    "SELECT * FROM users WHERE email = $1",
    [email]
  );

  return result.rows[0];
};

export const createUser = async (userData) => {
  const { full_name, email, phone, password, role } = userData;

  const result = await pool.query(
    `INSERT INTO users
    (full_name,email,phone,password,role)
    VALUES($1,$2,$3,$4,$5)
    RETURNING id,full_name,email,phone,role,created_at`,
    [full_name, email, phone, password, role]
  );

  return result.rows[0];
};