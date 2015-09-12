# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

USER = [
  ["Alina","Jahnes", "alina.jahnes@gmail.com","123-123-123", "T-mobile", "text", "coders", 20],
  ["Christine", "Schatz", "cmschatz@gmail.com","321-321-321","Verizon", "text", "coders", 24],
  ["Anna","Karingal", "anna.karingal@gmail.com","234-234-234", "Verizon", "text", "coders", 10],
  ["Britney", "Wright", "blw06g@gmail.com", "432-432-432","T-mobile", "email","coders", 15],
  ["Lauren","Roth", "laurennicoleroth@gmail.com", "345-345-345", "AT&T", "email","coders", 23]]


USER.each do |user|
  User.create(first_name: user[0], last_name: user[1], email: user[2], phone: user[3], phone_provider: user[4], prefered_contact: user[5], password: user[6], check_day_of_month: user[7])
end

Group.create(name: "bees")

USERGROUP = [[1,1],[3,1],[4,1],[5,1]]

USERGROUP.each {|usergroup| UserGroup.create(user_id: usergroup[0], group_id: usergroup[1])}



