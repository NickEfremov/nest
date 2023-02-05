import { UserEntity } from "../user.entity";

export type UserType = Omit<UserEntity, 'hashPassword'>;
// export type UserType = {
//     'firstName': string,
//     'lastName': string,
//     'password': string,
//     'email': string,
//     'username': string
// };