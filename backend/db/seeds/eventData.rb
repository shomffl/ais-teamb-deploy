puts 'event Start to create dummy data...'

10.times do |index|
    Event.create(
        company_id: index + 1,
        name: Faker::Company.name,
        detail: Faker::Company.catch_phrase,
        image_path: Faker::Company.logo
    )
end
