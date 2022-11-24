puts 'school Start to create dummy data...'

2.times do
    School.create(
        name: Faker::University.name
    )
end
