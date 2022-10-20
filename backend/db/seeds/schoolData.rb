puts 'school Start to create dummy data...'

10.times do 
    School.create(
        name: Faker::University.name
    )
end