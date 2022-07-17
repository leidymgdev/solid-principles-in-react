import { useEffect, useState } from "react";
import { User } from "./IUser";
import UserItem from "./UserItem";
import { useUsers } from "./useUsers";

export default function ActiveUsersList() {
  const { users } = useUsers();
  
  return (
    <ul>
      {users.map((user: User) => (
          <UserItem key={user.id} user={user} />
        ))}
    </ul>
  );
}
