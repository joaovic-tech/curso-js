DELETE users FROM users
INNER JOIN users_roles ON users.id = users_roles.user_id
INNER JOIN roles ON users_roles.role_id = roles.id
WHERE roles.name = 'PUT';

