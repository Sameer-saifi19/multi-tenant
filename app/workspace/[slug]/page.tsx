import DeleteOrgBtn from "@/components/global/delete-org-btn";
import { Button } from "@/components/ui/button";


type Props = {
  params: {slug: string}
}

const page = async ({params}: Props) => {
  const {slug} = await params;
  return (
    <div>
      {slug}
      <DeleteOrgBtn/>
    </div>
  )
}

export default page