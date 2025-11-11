import { Observable } from 'rxjs';
import { GetUsersRequest, GetUsersResponse } from './get-users.schema';

export * from './user.schema';
export * from './get-users.schema';

export interface UserService {
  getUsers(args: GetUsersRequest): Observable<GetUsersResponse>;
}
