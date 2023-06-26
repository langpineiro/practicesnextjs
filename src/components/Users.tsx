"use client";
import { useRouter } from "next/navigation";
const Users = ({ data }: { data: any }) => {
  const router = useRouter();
  return (
    <ul className="max-w-md mx-auto mb-4  my-8 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl dark:bg-black">
      {data.map((user: any) => (
        <li
          className="md:flex hover:bg-fuchsia-600"
          key={user.id}
          onClick={() => {
            router.push(`user/${user.id}`);
          }}
        >
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={user.avatar}
            />
          </div>
          <div className="p-8">
            <h5 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {user.first_name}
            </h5>
            <p className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {user.last_name}
            </p>
            <p className="block mt-1 text-lg leading-tight font-medium text-white ">
              {user.email}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Users;
