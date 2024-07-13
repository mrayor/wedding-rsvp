export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const getUsers = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/users`, {
      method: "GET",
    });

    return await res.json();
  } catch (error) {
    console.log(error);

    return error;
  }
};
