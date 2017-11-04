-- drop table if exists users;
create table users (
  id    int   not null auto_increment,
  lname text  not null,
  fname text  not null,
  email text  not null,
  rating int not null,
  lastfour int not null,
  hash text not null,
  primary key (id)
);

-- drop table if exists reviews;
create table reviews (
  userid int not null,
  review text not null,
  foreign key (userid) references users(id)
);

drop table if exists quests;
create table quests (
  id int not null auto_increment,
  user_id int not null,
  category text not null,
  descriptions text not null,
  cost number not null,
  long number not null,
  lat number not null,
  expiration timestamptz not null
);

-- test data
insert into users (lname, fname, rating, email, last4) values ("Test", "Girl", 5, "a@a.a", 1234);
insert into users (lname, fname, rating, email, last4) values ("Test", "Man", 5, "b@b.b", 4321);
