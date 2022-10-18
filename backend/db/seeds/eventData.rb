# frozen_string_literal: true

puts 'event ダミーデータの作成開始....'

10.times do |index|
  Event.create(
    company_id: index,
    name: Faker::Company.name,
    detail: Faker::Company.catch_phrase
  )
end
