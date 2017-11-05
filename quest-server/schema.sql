drop table if exists users cascade;
create table users (
  id int not null auto_increment,
  lname text  not null,
  fname text  not null,
  email text  not null,
  rating int not null,
  last4 int not null,
  primary key (id)
);

drop table if exists reviews cascade;
create table reviews (
  uid int not null,
  review text not null,
  foreign key (uid) references users(id)
);

drop table if exists quests cascade;
create table quests (
  id int not null auto_increment,
  uid int not null,
  category text not null,
  descriptions text not null,
  cost int not null,
  longitude int not null,
  latitude int not null,
  expiration datetime not null,
  primary key (id),
  foreign key (uid) references users(id)
);

-- test data
insert into users (lname, fname, rating, email, last4) values ("Test", "Girl", 5, "a@a.a", 1234);
insert into users (lname, fname, rating, email, last4) values ("Test", "Man", 5, "b@b.b", 4321);
