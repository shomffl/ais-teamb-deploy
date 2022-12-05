puts 'user Start to create dummy data...'

User.create(
    name: 'test-user1',
    email: 'test-user1@test.com',
    password: 'password1'
)