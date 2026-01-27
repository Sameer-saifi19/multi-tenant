

type Props = {
  params: {slug: string}
}

const page = async ({params}: Props) => {
  const {slug} = await params;
  return (
    <div>
      {slug}
    </div>
  )
}

export default page