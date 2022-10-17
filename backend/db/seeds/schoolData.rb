# frozen_string_literal: true

puts 'school ダミーデータの作成開始'

10.times do
  School.create(
    name: Faker::Name.name
  )
end
