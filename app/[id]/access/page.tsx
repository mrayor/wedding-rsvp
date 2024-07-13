import { Button } from "@nextui-org/button";
import { cookies } from "next/headers";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

const index = async ({ params: { id } }: { params: { id: string } }) => {
  const scanAccess = cookies().get("scan-access");

  if (!scanAccess) {
    return notFound();
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/users/${id}`,
    {
      method: "PATCH",
      body: JSON.stringify({
        status: "active",
      }),
    },
  );

  if (response.status === 200) {
    return redirect(process.env.NEXT_PUBLIC_URL || "");
  }

  if (response.status === 404) {
    return notFound();
  }

  if (response.status === 403) {
    return (
      <div className="flex flex-col space-y-2 h-full items-center justify-center">
        <p>Guest has either been granted access or rejected</p>
        <div className="py-4">
          <Button
            as={Link}
            color="primary"
            href={process.env.NEXT_PUBLIC_URL || ""}
            variant="solid"
          >
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  if (response.status >= 500) {
    return (
      <div className="flex flex-col space-y-2 h-full items-center justify-center">
        <p>Internal Server Error, Please try again</p>
        <div className="py-4">
          <Button
            as={Link}
            color="primary"
            href={`${process.env.NEXT_PUBLIC_URL}/${id}/access`}
            variant="solid"
          >
            Refresh
          </Button>
        </div>
      </div>
    );
  }

  return null;
};

export default index;
