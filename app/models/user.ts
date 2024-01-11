export interface UserType {
  id: number;
  name: string;
  permissions: string[];
}

export default class User {
  user?: UserType;

  constructor(user?: UserType) {
    this.user = user;
  }

  canAccess(permission: string) {
    let userPermissions = this.user?.permissions ?? [];

    let permissions = permission
      .split("|")
      .filter((per) => userPermissions.includes(per));

    return permissions.length > 0;
  }
}
