import { User } from "./IUser";

export default function UserItem(props: { user: User }) {
  const { user } = props;
  return (
    <li key={user.id}>
      <p>{user.name}</p>
      <p>{user.username}</p>
      <small>{user.email}</small>
    </li>
  );
}
