import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { User } from '../../entity/user.entity';
import { enumToArray } from '../../core/utils/helper';
import { Gender } from '../../common/enums/gender.enum';
import { Profile } from '../../entity/profile.entity';

define(User, (faker: typeof Faker, context: { roles: string[] }) => {
  const gender = faker.random.number(1);
  const firstName = faker.name.firstName(gender);
  const lastName = faker.name.lastName(gender);
  const email = faker.internet.email(firstName, lastName);
  const phone = faker.phone.phoneNumber();
  const avatar = faker.image.avatar();
  const roleId = faker.random.number({ min: 2, max: 3 });
  const user = new User();
  const profile = new Profile();
  user.email = email;
  user.password = 'admin';
  profile.name = `${firstName} ${lastName}`;
  profile.phone = phone;
  profile.profileUrl = avatar;
  user.profile = profile;
  user.roleId = roleId;
  return user;
});
