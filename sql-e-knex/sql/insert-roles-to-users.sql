INSERT INTO users_roles (
  user_id,
  role_id
) VALUES (
  (SELECT id FROM users WHERE email = "maria@mail.com"),
  (SELECT id FROM roles WHERE name = "GET")
), (
  (SELECT id FROM users WHERE email = "rafaelacamaguinhodosex2000@gmail.com"),
  (SELECT id FROM roles WHERE name = "GET")
), (
  (SELECT id FROM users WHERE email = "belavera@mail.com"),
  (SELECT id FROM roles WHERE name = "GET")
), (
  (SELECT id FROM users WHERE email = "goreidelas2022@gmail.com"),
  (SELECT id FROM roles WHERE name = "GET")
)
