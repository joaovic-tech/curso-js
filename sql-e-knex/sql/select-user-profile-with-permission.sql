SELECT u.id, u.first_name, r.name, p.bio
FROM users u
INNER JOIN users_roles ur ON u.id = ur.user_id
INNER JOIN roles r ON ur.role_id = r.id
INNER JOIN profiles p ON p.user_id = u.id;
